export default {
    async signIn({ commit, dispatch, state }, { params, isRemember }) {
        try {
            const response = await this.$axios.$post('user/auth/log-in', params);

            if (response.access) {
                const {access, refresh} = response;
                commit('setTokens', {
                    access,
                    refresh: isRemember ? refresh : null,
                });
            }

            return true;
        } catch (e) {
            return false;
        }
    },
}
