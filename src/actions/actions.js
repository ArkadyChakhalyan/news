const onLogin = (user) => {
    return {
        type: 'ON_LOGIN',
        user: user
    };
};

const onLogout = () => {
    return {
        type: 'ON_LOGOUT'
    };
};


export {
    onLogout,
    onLogin
};