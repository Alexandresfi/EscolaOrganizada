import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {PersonDataParents} from "../Responsibles/PersonData"
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Container, HearderProgress } from "../TeacherManagement/styles";
import { AddressData } from "../Responsibles/AddressData";
import { StudentsData } from "./StudentsData";

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
    responsible_1: '',
    kinshi_1: '',
    responsible_2: '',
    kinshi_2: '',
    email: ' ',
    email_2: ' ',
    birthdate: '',
    telephone_1: '',
    telephone_2: '',
    cpf_1: '',
    cpf_2: '',
    zipCod: '',
    street: '',
    housenumbe: '',
    complement: '',
    city: '',
    district: '',
    state: '',
    name_student: '',
    birthdate_student: '',
    scholl_Class_student: '',
    scholl_year_student: '',
}

const validation = Yup.object().shape({
    responsible_1: Yup.string()
        .required('Este Campo é obrigatório'),
    kinshi_1: Yup.string()
        .required('Este Campo é obrigatório'),
    responsible_2: Yup.string()
        .required('Este Campo é obrigatório'),
    kinshi_2: Yup.string()
        .required('Este Campo é obrigatório'),
    email: Yup.string().email().required('Este Campo é obrigatório'),
    birthdate: Yup.string().required('Este Campo é obrigatório'),
    telephone_1: Yup.string().required('Este Campo é obrigatório'),
    telephone_2: Yup.string().required('Este Campo é obrigatório'),
    cpf_1: Yup.number().max(14, 'Máximo de 14 números').min(14, 'Minímo de 14 números').required('Este Campo é obrigatório'),
    cpf_2: Yup.number().max(14, 'Máximo de 14 números').min(14, 'Minímo de 14 números').required('Este Campo é obrigatório'),
    zipCod: Yup.number()
        .min(8, 'o cep possui oito dígitos, apenas números sem pontos e -')
        .required('Este Campo é obrigatório'),
    street: Yup.string().required('Este Campo é obrigatório'),
    housenumbe: Yup.number().required('Este Campo é obrigatório'),
    complement: Yup.string().required('Este Campo é obrigatório'),
    city: Yup.string().required('Este Campo é obrigatório'),
    district: Yup.string().required('Este Campo é obrigatório'),
    state: Yup.string().required('Este Campo é obrigatório'),
    name_student: Yup.string().required('Este Campo é obrigatório'),
    birthdate_student: Yup.string().required('Este Campo é obrigatório'),
    scholl_year_student: Yup.number().required('Este Campo é obrigatório'),
    scholl_Class_student: Yup.string()
})

export function RegistrationParents() {
    const [value, setValue] = useState(0);
    const [progress, setProgress] = useState(0);

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
                {value === 0 && <h1>Dados dos Responsaveis</h1>}

                {value === 1 && (<HearderProgress>
                    <h1>Dados Residenciais (Responsável Principal)</h1>
                    <Button onClick={() => UpdatePageProgress(0, 0)}>
                        voltar
                    </Button>
                </HearderProgress>
                )}

                {value === 2 && (<HearderProgress>
                    <h1>Dados do Aluno</h1>
                    <Button onClick={() => UpdatePageProgress(1, 25)}>
                        voltar
                    </Button>
                </HearderProgress>
                )}

                <LinearProgress variant="determinate" value={progress} />
            </>

            <TabPanel value={value} index={0}>
                <PersonDataParents formik={formik} updatePageProgress={UpdatePageProgress} />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <AddressData formik={formik} updatePageProgress={UpdatePageProgress} />
            </TabPanel>
            
            <TabPanel value={value} index={2}>
                <StudentsData formik={formik} updatePageProgress={UpdatePageProgress} />
            </TabPanel>

        </Container>
    )
}