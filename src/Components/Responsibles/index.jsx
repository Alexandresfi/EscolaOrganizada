import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {PersonDataParents} from "../Responsibles/PersonData"
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Container, HearderProgress } from "../TeacherManagement/styles";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const initialValues = {
    responsible: '',
    kinshi: '',
    emai: ' ',
    email_2: ' ',
    birthdate: '',
    telephone_1: '',
    telephone_2: '',
    cpf: '',
    zipCod: '',
    stree: '',
    housenumbe: '',
    complemen: '',
    cit: '',
    distric: '',
    stat: ''
}

const validation = Yup.object().shape({
    responsible: Yup.string()
        .required('Este Campo é obrigatório'),
    kinshi: Yup.string()
        .required('Este Campo é obrigatório'),
    email: Yup.string().email().required('Este Campo é obrigatório'),
    birthdate: Yup.string().required('Este Campo é obrigatório'),
    telephone_1: Yup.string().required('Este Campo é obrigatório'),
    telephone_2: Yup.string().required('Este Campo é obrigatório'),
    cpf: Yup.number().required('Este Campo é obrigatório'),
    zipCod: Yup.number()
        .min(8, 'o cep possui oito dígitos, apenas números sem pontos e -')
        .required('Este Campo é obrigatório'),
    stree: Yup.string().required('Este Campo é obrigatório'),
    housenumbe: Yup.number().required('Este Campo é obrigatório'),
    complemen: Yup.string().required('Este Campo é obrigatório'),
    cit: Yup.string().required('Este Campo é obrigatório'),
    distric: Yup.string().required('Este Campo é obrigatório'),
    stat: Yup.string().required('Este Campo é obrigatório'),
})

export function RegistrationParents() {
    const [value, setValue] = React.useState(0);
    const [progress, setProgress] = React.useState(0);

    const formik = useFormik({
        initialValues,
        validationSchema: validation,

        onSubmit: values => {
            console.log(values)
        },
    })

    const UpdatePageProgress = (pag, pro) => {
        setValue(pag)
        setProgress(pro)
    }

    return (
        <Container>
            <>
                {value === 0 && <h1>Dados do Respoável 1</h1>}
                {value === 1 && (<HearderProgress>
                    <h1>Dados do Respoável 2</h1>
                    <Button onClick={() => UpdatePageProgress(0, 0)}
                    >
                        voltar
                    </Button>
                </HearderProgress>
                )}

                {value === 2 && (<HearderProgress>
                    <h1>Dados Residênciais do Respoável 1</h1>
                    <Button onClick={() => UpdatePageProgress(1, 25)}
                    >
                        voltar
                    </Button>
                </HearderProgress>
                )}

                {value === 3 && (<HearderProgress>
                    <h1>Dados Residênciais do Respoável 2</h1>
                    <Button onClick={() => UpdatePageProgress(1, 50)}
                    >
                        voltar
                    </Button>
                </HearderProgress>
                )}

                {value === 4 && (<HearderProgress>
                    <h1>Dados do Aluno</h1>
                    <Button onClick={() => UpdatePageProgress(1, 75)}
                    >
                        voltar
                    </Button>
                </HearderProgress>
                )}

                <LinearProgress variant="determinate" value={progress} />
            </>

            <TabPanel value={value} index={0}>
                <PersonDataParents formik={formik} updatePageProgress={UpdatePageProgress} />
            </TabPanel>

        </Container>
    )
}