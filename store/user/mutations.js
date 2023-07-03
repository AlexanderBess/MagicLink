import { accessLifetime, refreshLifetime } from '~/utils/enums';
import { Path } from '~/utils/enums';

export default {
    setTokens(state, {
        access, refresh, social, userStatus,
    }) {
        state.tokens.access = access;
        state.tokens.refresh = refresh;

        this.$cookies.set('access', access, { path: Path.ROOT, maxAge: accessLifetime });
        this.$cookies.set('refresh', refresh, { path: Path.ROOT, maxAge: refreshLifetime });
        this.$cookies.get('refresh');
    },
    setMyData(state, payload) {
        state.myData = payload;
    },
    logOut(state) {
        this.$cookies.remove('access');
        this.$cookies.remove('refresh');

        state.userData = {};
        state.tokens = { access: null, refresh: null };
    },
}
