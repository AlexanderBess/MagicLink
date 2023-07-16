export default {
    async getLinks({commit, state}, payload) {
        try {
            const result = await this.$axios.$get('profile/links/groups');

            commit('setLinks', result);
            return result
        }
        catch (e) {
            console.error(e);
            return false;
        }
    },
    async addLinksGroup({commit, state}, payload) {
        const myOldData = JSON.parse(JSON.stringify(state.myData));
        const myNewData = Object.assign(myOldData, payload);
        try {
            const result = await this.$axios.$post('profile/links/group/add', myNewData);

            commit('setMyData', result);
            return result
        }
        catch (e) {
            commit('setError', e.message);
            console.error(e);
            return false;
        }
    },
}
