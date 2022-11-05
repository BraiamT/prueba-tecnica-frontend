import { Alert, Button, Grid, TextField } from '@mui/material';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { login, startLogin } from '../../store/auth';
import { LoginBackground } from '../components/LoginBackground';

const formData = {
    user: '',
    password: ''
}

const formValidations = {
    user: [ (value) => value.length >= 4, 'El usuario debe ser de al menos 4 caracteres' ],
    password: [ (value) => value.length >= 6, 'La contraseña debe ser de al menos 6 caracteres' ]
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const { user, password, onInputChange, isFormValid, userValid, passwordValid, formState } = useForm(formData, formValidations);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const isAuthenticating = useMemo(() => status === 'checking-auth', [status]);

    const onSumbit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        if ( !isFormValid ) return;
    
        dispatch( startLogin(formState) );
    }

    const onCopyPaste = ( event ) => {
        event.preventDefault();
        return false;
    }
    
    return (
        <LoginBackground>

            <form aria-label='login-form' onSubmit={ onSumbit }>

                <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Usuario"
                            type="text"
                            name="user"
                            inputProps={{ 'onCopy': onCopyPaste, 'onPaste': onCopyPaste }}
                            value={ user }
                            placeholder="cool_user"
                            fullWidth
                            onChange={ onInputChange }
                            error={ !!userValid && formSubmitted }
                            className={ (!!userValid && formSubmitted) ? 'errorShake' : '' }
                            helperText={ formSubmitted ? userValid : null }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            name="password"
                            inputProps={{ 'onCopy': onCopyPaste, 'onPaste': onCopyPaste }}
                            value={ password }
                            placeholder="*********"
                            fullWidth
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmitted }
                            className={ (!!passwordValid && formSubmitted) ? 'errorShake' : '' }
                            helperText={ formSubmitted ? passwordValid : null }
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

                        <Grid
                            item
                            xs={ 12 }
                            display={ !!errorMessage ? '' : 'none' }
                        >
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 }>
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={ isAuthenticating }
                                fullWidth
                            >Iniciar sesión</Button>
                        </Grid>

                    </Grid>

                </Grid>

            </form>

        </LoginBackground>
    )
}
