export default {
    isAuth: (state) => !!state.tokens.access,
    accessToken: (state) => state.tokens.access,
    refreshToken: (state) => state.tokens.refresh,
    myData: (state) => state.myData
}
