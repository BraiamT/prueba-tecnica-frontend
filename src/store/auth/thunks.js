import { validFakeUser } from '../../helpers/fakeLogin';
import { checkingCredentials, login, logout } from './authSlice';

export const startLogin = ({ user, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
        setTimeout( () => {

            const isValidLogin = ( user === validFakeUser.user && password === validFakeUser.password );

            if ( !isValidLogin ) return dispatch( logout({ errorMessage: 'Usuario o contraseña incorrectos' }) );

            dispatch( login({ user, password }) );

        }, 1000);        

    }
}
