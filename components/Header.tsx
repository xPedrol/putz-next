import {AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography} from '@mui/material';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import {useAuth} from '../contexts/AuthContext';

function Header() {
    const account = useAuth();
    return (<>
        <Box sx={{flexGrow: 1}} mb={3}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                    </IconButton>
                    <Typography className={`${styles.poppins} `} variant="h5" component="h2" sx={{flexGrow: 1}}>
                        Putz Filmes
                    </Typography>
                    {!account &&
                        <Link href="/auth/login" passHref>
                            <Button color="inherit">Login</Button>
                        </Link>
                    }
                    {account &&
                        <Avatar
                            alt={account?.login}
                            src={account?.imageUrl}
                            sx={{ width: 40, height: 40 }}
                        />
                    }

                </Toolbar>
            </AppBar>
        </Box></>);
}

export default Header;