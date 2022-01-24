class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log('Inside registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout() {
        console.log('Inside log')
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null){
            return false
        }
        return true
    }
}

export default new AuthenticationService()