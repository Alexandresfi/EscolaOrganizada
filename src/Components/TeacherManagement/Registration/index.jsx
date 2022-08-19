import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PersonData } from "./PersonData";
import { AddressData } from "./AddressData";
import { EmploymentData } from "./EmploymentData";

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import { HearderProgress } from "../styles";

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
    fullname: '',
    surname: '',
    email: ' ',
    birthdate: '',
    gener: '',
    telephone: '',
    numberCard: '',
    cpf: '',
    rg: '',
    zipCode: '',
    street: '',
    housenumber: '',
    complement: '',
    city: '',
    district: '',
    state: '',
    titles: '',
    training_institution: '',
    training_date: '',

}

const validation = Yup.object().shape({
    fullname: Yup.string()
        .required('Este Campo é obrigatório'),
    surname: Yup.string().required('Este Campo é obrigatório'),
    email: Yup.string().email().required('Este Campo é obrigatório'),
    birthdate: Yup.string().required('Este Campo é obrigatório'),
    gener: Yup.string().required('Este Campo é obrigatório'),
    telephone: Yup.string().required('Este Campo é obrigatório'),
    numberCard: Yup.number()
        .min(11, 'São permitidos apenas 11 números contando com o DDD e o nono didito')
        .required('Este Campo é obrigatório'),
    cpf: Yup.number().required('Este Campo é obrigatório'),
    rg: Yup.number().required('Este Campo é obrigatório'),
    zipCode: Yup.number()
        .min(8, 'o cep possui oito dígitos, apenas números sem pontos e -')
        .required('Este Campo é obrigatório'),
    street: Yup.string().required('Este Campo é obrigatório'),
    housenumber: Yup.number().required('Este Campo é obrigatório'),
    complement: Yup.string().required('Este Campo é obrigatório'),
    city: Yup.string().required('Este Campo é obrigatório'),
    district: Yup.string().required('Este Campo é obrigatório'),
    state: Yup.string().required('Este Campo é obrigatório'),
    titles: Yup.string().required('Este Campo é obrigatório'),
    training_institution: Yup.string().required('Este Campo é obrigatório'),
    training_date: Yup.string().required('Este Campo é obrigatório'),
})


export function Registration() {
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
        <>
            <>
                {value === 0 && <h1>Dados Pessoais</h1>}
                {value === 1 && (<HearderProgress>
                    <h1>Dados Residênciais</h1>
                    <Button onClick={() => UpdatePageProgress(0, 0)}
                    >
                        voltar
                    </Button>
                </HearderProgress>
                )}
                {value === 2 && (
                    <HearderProgress>
                        <h1>Dados Profissionais</h1>
                        <Button onClick={() => UpdatePageProgress(1, 50)}
                        >
                            voltar
                        </Button>
                    </HearderProgress>
                )}
                <LinearProgress variant="determinate" value={progress} />
            </>


            <TabPanel value={value} index={0}>
                <PersonData formik={formik} updatePageProgress={UpdatePageProgress} />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <AddressData formik={formik} updatePageProgress={UpdatePageProgress} />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <EmploymentData formik={formik} updatePageProgress={UpdatePageProgress} />
            </TabPanel>

        </>
    )
}