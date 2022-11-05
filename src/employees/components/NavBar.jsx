import { Link as RouterLink } from 'react-router-dom';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlice';

export const NavBar = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( logout() );
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { md: '100%' }
            }}
        >

            <Toolbar>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>

                    <Typography color='secondary' variant='h6' noWrap component='div'>React Test App</Typography>
                    <Typography sx={{ fontSize: '16px' }} variant='body' noWrap component='div'>
                        <Link component={ RouterLink } color="inherit" sx={{ textDecoration: 'none' }} to="/employees">
                            EMPLOYEES
                        </Link>
                    </Typography>
                    <Typography sx={{ fontSize: '16px' }} variant='body' noWrap component='div'>
                        <Link component={ RouterLink } color="inherit" sx={{ textDecoration: 'none' }} to="/upload">
                            UPLOAD
                        </Link>
                    </Typography>
                    <IconButton color='secondary' onClick={ onLogout }>
                        <LogoutOutlined />
                    </IconButton>

                </Grid>

            </Toolbar>
            
        </AppBar>
    )
}
