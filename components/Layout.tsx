import {Container, CssBaseline} from '@mui/material';
import Header from './Header';

interface IOptions {
    title?: string;
    children:any;
}

export default function MainLayout({children, title}: IOptions) {
    const auxTitle = `PUTZ - ${title}`
    return (
        <>
            {/*<head>*/}
            {/*    <title>{auxTitle}</title>*/}
            {/*</head>*/}
            <CssBaseline/>
            <Header/>
            <Container maxWidth="lg">
                {children}
            </Container>
        </>
    );
}