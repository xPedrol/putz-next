import {AppBar, Box, Button, IconButton, Toolbar, Typography} from '@mui/material';
import styles from '../styles/Header.module.css'
function Header() {
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
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box></>);
}

export default Header;