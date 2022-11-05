import { Grid, Typography } from '@mui/material';
import { getEnvironments } from '../../helpers';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { EmployeesLayout } from '../layout/EmployeesLayout';

export const UploadPage = () => {

    const { VITE_APP_TITLE_PREFIX } = getEnvironments();

    useDocumentTitle(`${ VITE_APP_TITLE_PREFIX } | Upload`);

    return (
        <EmployeesLayout>
            
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
                    <Typography color='white' variant='h5' sx={{ fontWeight: '500' }}>
                        Not enough time because of other job activities, no excuses, just sorry :c... 
                    </Typography>
                </Grid>

            </Grid>
            
        </EmployeesLayout>
    )
}
