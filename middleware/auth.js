import { Path } from '~/utils/enums';

// eslint-disable-next-line func-names
export default async function ({
       app, redirect, store, route,
   }) {
    try {
        const access = app.$cookies.get('access');
        const refresh = app.$cookies.get('refresh');
        const payload = {
            access,
            refresh
        };
        if (access || refresh) {
            store.commit('user/setTokens', payload);
        }
        if (!access) {
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
