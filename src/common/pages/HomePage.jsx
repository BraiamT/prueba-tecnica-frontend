import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link, Typography } from '@mui/material';
import { getEnvironments } from '../../helpers/getEnvironments';
import { useDocumentTitle } from '../../hooks';

export const HomePage = () => {

    const { VITE_APP_TITLE_PREFIX } = getEnvironments();

    useDocumentTitle(`${ VITE_APP_TITLE_PREFIX } | Home`);

    return (
        <Grid
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'background.main', padding: 4 }}
        >

            <Grid
                container
                direction="row"
                justifyContent="center"
            >
                <Typography color='white' variant='body' sx={{ fontWeight: '200' }}>
                    Esto es solo una simulación de un home page, perdón por el diseño tan pobre :c 
                    <Link component={ RouterLink } color="inherit" to="/auth/login">
                        &nbsp;Volver a Login
                    </Link>
                    &nbsp; (Hará redirect a employees si se tiene una sesión iniciada)
                </Typography>
            </Grid>

        </Grid>
    )
}
