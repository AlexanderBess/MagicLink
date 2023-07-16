export default {
    async registration({commit}, payload) {
        try {
            return await this.$axios.$post('user/registration', payload);
        } catch (err) {
            console.error(err);
            return false;
        }
    },
    async confirmRegistration({commit}, payload) {
        try {
            return await this.$axios.$post('user/registration/confirm', payload);
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}
