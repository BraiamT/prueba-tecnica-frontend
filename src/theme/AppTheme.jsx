import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import coolThemeTest from './coolThemeTest';

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={ coolThemeTest }>
            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}
