export default {
    async login({ commit, dispatch, state }, { params, isRemember }) {
        try {
            const response = await this.$axios.$post('user/auth/log-in', params);
            if (response) {
                const {accessToken, refreshToken} = response;

                commit('setTokens', {
                    access: accessToken,
                    refresh: refreshToken// isRemember ? refreshToken : null,
                });
            }
            await dispatch('getMyData');
            return true;
        } catch (e) {
            return false;
        }
    },
    async refreshTokens({ commit, state }) {
        try {
            const refreshTokenFromCookie = this.$cookies.get('refresh');
            const { result } = await this.$axios.$post('user/auth/refresh-access-token', String(state.tokens.refresh) || String(refreshTokenFromCookie));

            commit('setTokens', result);
            return true;
        } catch (e) {
            console.error('user/refreshToken', e);
            return false;
        }
    },
    async getMyData({commit}) {
        try {
            const result = await this.$axios.$get('me/profile');

            commit('setMyData', result);
            return result
        }
        catch (e) {
            return false;
        }
    }
}
