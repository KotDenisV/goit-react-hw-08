const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;
// const selectToken = state => state.auth.token;

export { selectIsLoggedIn, selectUser };