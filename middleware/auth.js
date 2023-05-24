import { Path } from '~/utils/enums';

// eslint-disable-next-line func-names
export default async function ({
       app, redirect, store, route,
   }) {
    try {
        const access = app.$cookies.get('access');
        const refresh = app.$cookies.get('refresh');
        const userStatus = app.$cookies.get('userStatus');
        const social = app.$cookies.get('socialNetwork');
        const payload = {
            access,
            refresh,
            userStatus,
            social,
        };

        if (access || refresh) {
            store.commit('user/setTokens', payload);
        }
        if (!access || !app.$cookies.get('userLogin')) {
            await store.dispatch('user/logout', false);
            return redirect(Path.SIGN_IN);
        }

        return true;
    } catch (e) {
        console.error('middleware/auth', e);
        await store.dispatch('user/logout', false);
        return redirect(Path.SIGN_IN);
    }
}
