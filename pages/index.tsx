import type {NextPage} from 'next';
import {Button} from '@mui/material';
import MainLayout from '../components/Layout';

const Home: NextPage = () => {
    return (
        <MainLayout>
            <Button variant="contained"> Olá Mundo</Button>
        </MainLayout>
    );
};

export default Home;
