import { Path } from '~/utils/enums';

export default ({
  $axios, store, redirect, app,
}) => {
  let isRefreshing = false;
  let isStopRequests = false;
  let refreshRequests = [];
  const withoutTokenRequests = ['login', 'register', 'validate-totp'];

  $axios.onRequest((config) => {
    const access = store.getters['user/accessToken'];
    const refresh = store.getters['user/refreshToken'];
    const isAuth = store.getters['user/isAuth'] ;

    if (isAuth && !config.url.includes('digitaloceanspaces.com')) {
      const urlName = config.url.split('/').pop();
      if (urlName === 'refresh-access-token') {
        config.headers.authorization = `Bearer ${refresh}`;
      } else {
        config.headers.authorization = `Bearer ${access}`;
      }
    }

    if (withoutTokenRequests.includes(config.url.split('/').pop())) {
      isStopRequests = false;
    }

    if (isStopRequests) {
      throw new Error();
    }
  });

  $axios.onResponse((response) => {
    const { config } = response;
    const isRefreshRequest = config.url.split('/').pop() === 'refresh-access-token';

    if (isRefreshRequest && response.status === 200) {
      store.commit('user/setTokens', {
        access: response.data.accessToken,
        refresh: response.data.refreshToken,
      });
      isRefreshing = false;
      refreshRequests.forEach((req) => $axios(req));
      refreshRequests = [];
    }
  });

  $axios.onError(async (error) => {
    // TODO Разобраться с авторизацией
    // store.commit('user/logOut');
    // redirect(Path.ROOT);
    // return null;


    // if request was not valid
    const originalRequest = error.config;
    if (!originalRequest) {
      isRefreshing = false;
      isStopRequests = true;
      refreshRequests = [];
      store.commit('user/logOut');
      redirect(Path.SIGN_IN);
      throw error;
    }

    if (error.response.status === 401) {
      if (originalRequest.url.split('/').pop() === 'refresh-access-token') {
        isRefreshing = false;
        isStopRequests = true;
        refreshRequests = [];
        store.commit('user/logOut');
        redirect(Path.SIGN_IN);
        throw error;
      }

      if (!originalRequest._retry && !isRefreshing) {
        isRefreshing = true;
        originalRequest._retry = true;

        const responseRefresh = await store.dispatch('user/refreshTokens');

        if (responseRefresh?.ok) return $axios(originalRequest);

        return null;
      }

      if (isRefreshing) {
        refreshRequests.push(originalRequest);
      }
    }

    const isWrongToken = error.response.data.msg === 'Invalid confirmation code';
    if (!isWrongToken && (error.response.data.code === 403000 || error.response.data.code !== 400010)) {
      console.log('title:' + app.i18n.t('toasts.error'));
      console.log('text:' + error.response.data.msg);
    }
    throw error?.response?.data;
  });
};
