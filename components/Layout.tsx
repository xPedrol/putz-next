import {Container, CssBaseline} from '@mui/material';
import Header from './Header';

export default function MainLayout({children}: any) {
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Container maxWidth="lg">
                {children}
            </Container>
        </>
    );
}