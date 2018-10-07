export function authHeader() {
    // retorna o cabeçalho de autorização com o token jwt
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}