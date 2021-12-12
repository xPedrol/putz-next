import MainLayout from '../components/Layout';
import {Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {getProjects} from '../services/project-service';
import api from '../config/api';

function Projects({data}: any) {

    return (
        <>
            <MainLayout>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 700}} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Nome</TableCell>
                                <TableCell align="left">Tipo</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left">Início</TableCell>
                                <TableCell align="left">Cliente</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data?.length > 0 &&
                                <>
                                {data.map((project: any) => (
                                        <TableRow key={project.id}>
                                            <TableCell component="th" scope="row">
                                                {project?.name}
                                            </TableCell>
                                            <TableCell align="left">
                                                <Chip color={project?.isApprovedByClient?'success':'error'} label={project?.isApprovedByClient ? 'Aprovado' : 'Não aprovado'}
                                                      variant="outlined"/>
                                            </TableCell>
                                            <TableCell align="left">{project?.projectStatus}</TableCell>
                                            <TableCell align="left">{project?.startDate}</TableCell>
                                            <TableCell align="left">{project?.client?.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </>
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </MainLayout>
        </>
    );
}

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    try {
        api.defaults.headers.common['Authorization'] = `Bearer ${context.req.cookies.putz_auth_token}`;
        const res = await getProjects();
        // Pass data to the page via props
        return {props: {data: res.data}};
    } catch (e) {
        return {props: {data: null}};
    }

}

export default Projects;