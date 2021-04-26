import { firebase, googleAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
})


export const startLogin = () => {

    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then(function (result) {
            // This gives you a Google Access Token.
            const token = result.credential.accessToken;
            console.log(token)
            // The signed-in user info.
            const user = result.user;
            console.log(user)
        });
    }
}

export const logout = (uid) => ({
    type: 'LOGOUT'
})


export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut().then();
    }
}