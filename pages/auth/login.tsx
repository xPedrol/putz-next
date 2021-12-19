import {Box} from '@mui/system';
import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from '@mui/material';
import MainLayout from '../../components/Layout';
import {useForm} from 'react-hook-form';
import FormError from '../../components/FormError';
import {AuthLogin} from '../../contexts/AuthContext';
import Router from 'next/router';

export default function SignIn() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const caralhoViado = async (data: any) => {
        const res = await AuthLogin(data);
        if (res) {
            Router.push('/projects');
        }
    };
    return (
        <MainLayout title={'Log in'}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Entrar
                    </Typography>
                    <Box onSubmit={handleSubmit(caralhoViado)} component="form" noValidate sx={{mt: 1}}>
                        <FormControl fullWidth>
                            <TextField
                                {...register('username', {required: true})}
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Nome de usuário"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                error={!!errors.username}
                            />
                            {errors.username?.type === 'required' && <FormError>This field is required</FormError>}
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                {...register('password', {required: true})}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                error={!!errors.password}
                            />
                            {errors.password?.type === 'required' && <FormError>This field is required</FormError>}
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {'Don\'t have an account? Sign Up'}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </MainLayout>
    );
}

