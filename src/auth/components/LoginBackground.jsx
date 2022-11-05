import { Grid, Typography } from '@mui/material';

export const LoginBackground = ({ children }) => {
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
                item
                className="box-shadow animate__animated animate__fadeIn animate__faster"
                xs={ 3 }
                sx={{
                    width: { md: 500, sm: 500 },
                    backgroundColor: '#ebebeb',
                    padding: 3,
                    borderRadius: 2
                }}
            >
                <Typography variant="h5" sx={{ mb: 1 }} align="center">Fake Login</Typography>

                { children }
            </Grid>

        </Grid>
    )
}
