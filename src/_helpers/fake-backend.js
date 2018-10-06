// array users buscando de localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];
    
export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // autenticação
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.cpf === params.cpf && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            cpf: user.cpf,
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('CPF ou senha não são válidos');
                    }

                    return;
                }

                // recupera usuários
                if (url.endsWith('/users') && opts.method === 'GET') {
                    //Checa por token de autenticação e retorna usuários se for token for válido
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        // return 401 não-autorizado se token não for válido
                        reject('Unauthorised');
                    }

                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        // responde 200 OK mais obj user na callback
                        resolve({ ok: true, text: () => JSON.stringify(user)});
                    } else {
                        // retorna 401 não-autorizado se token não for válido
                        reject('Unauthorised');
                    }

                    return;
                }

                // cadastro efetivamente o usuário
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // Retorna um novo obj user do body da requisição
                    let newUser = JSON.parse(opts.body);

                    // validação de CPF (superficial)
                    let duplicateUser = users.filter(user => { return user.cpf === newUser.cpf; }).length;
                    if (duplicateUser) {
                        reject('CPF "' + newUser.cpf + '" já cadastrado');
                        return;
                    }

                    // Salva um novo usuário
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // responde com 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // Deleta um usuário
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // deleta usuário
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // responde com 200 OK
                        resolve({ ok: true, text: () => Promise.resolve() });
                    } else {
                        // retorna 401 não-autorizado se token não for válido
                        reject('Unauthorised');
                    }

                    return;
                }

                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}