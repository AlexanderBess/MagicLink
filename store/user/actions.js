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
            const token = state.tokens.refresh ? `${state.tokens.refresh}` : `${refreshTokenFromCookie}`;
            const { result } = await this.$axios.$post('user/auth/refresh-access-token', token);

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
    },
    async setMyData({commit, state}, payload) {
        const myOldData = JSON.parse(JSON.stringify(state.myData));
        const myNewData = Object.assign(myOldData, payload);
        try {
            const result = await this.$axios.$post('me/profile/edit', myNewData);

            commit('setMyData', result);
            return result
        }
        catch (e) {
            commit('setError', e.message);
            console.error(e);
            return false;
        }
    },
    async setViewColors({commit, state}, payload) {
        const myOldData = JSON.parse(JSON.stringify(state.myData.view.colors));
        const myNewData = Object.assign(myOldData, payload);
        try {
            const result = await this.$axios.$post('me/profile/view/edit', myNewData);

            commit('setMyViewData', result);
            return result
        }
        catch (e) {
            commit('setError', e.message);
            console.error(e);
            return false;
        }
    }
}
