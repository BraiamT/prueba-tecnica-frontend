import { getEnvironments } from '../../helpers/getEnvironments';
import { useDocumentTitle } from '../../hooks';

export const HomePage = () => {

    const { VITE_APP_TITLE_PREFIX } = getEnvironments();

    useDocumentTitle(`${ VITE_APP_TITLE_PREFIX } | Home`);

    return (
        <h1>Home Page</h1>
    )
}
