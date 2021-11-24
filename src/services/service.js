const accounts = [
    {   
        name: 'Mike',
        login: 'admin',
        password: 'adminpassword',
        isAdmin: true,
    },
    {   
        name: 'Daniel',
        login: 'user',
        password: 'password',
        isAdmin: false,
    }
];

export default class Service {
    
    onLogin (login, password) {

        return new Promise((resolve, reject) => {

            const user = accounts.find((item) => {
                return item.login === login && item.password === password;
            });

            setTimeout(() => {
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error('No such User'));
                }

            }, 100);

        });
    };
};