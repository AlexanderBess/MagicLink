//import { accessLifetime, refreshLifetime } from '~/utils/сonstants/cookiesLifetime';
import { Path } from '~/utils/enums';

export default {
    setTokens(state, {
        access, refresh, social, userStatus,
    }) {
        // state.tokens.access = access;
        // state.tokens.refresh = refresh;

        // this.$cookies.set('access', access, { path: Path.ROOT, maxAge: accessLifetime });
        // this.$cookies.set('refresh', refresh, { path: Path.ROOT, maxAge: refreshLifetime });
        // this.$cookies.set('socialNetwork', social, { path: Path.ROOT, maxAge: accessLifetime });
        // if (!userStatus) return;
        // this.$cookies.set('userStatus', userStatus, { path: Path.ROOT, maxAge: accessLifetime });
    },
}
