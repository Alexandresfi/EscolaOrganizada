import React from 'react'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
} from '@material-ui/core'
import { validate } from 'gerador-validador-cpf'
import { ButtonBack, ButtonGo, Content } from '../styles'
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function EmploymentData({ formik}) {

    const [errorCPF, setErrorCPF] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const history = useHistory()

    const time = 1000

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const validateCpf = (event) => {
        if (event.target.value !== ' ') {
            if (validate(event.target.value)) {
                setErrorCPF(false)

            } else {
                setErrorCPF(true)
            }
        } else {
            setErrorCPF(false)

        }
    }

    return (
        <>

            <Content>
                <TextField
                    label='cpf'
                    variant='outlined'
                    type="number"
                    autoComplete={false}
                    fullWidth
                    required
                    onChange={(event) => {
                        validateCpf(event)
                        formik.setFieldValue('cpf', event.target.value)
                    }}
                />

                {errorCPF && <span>cpf inválido</span>}
            </Content>

            <Content>
                <TextField
                    label='rg'
                    variant='outlined'
                    type="number"
                    autoComplete={false}
                    fullWidth
                    required
                    {...formik.getFieldProps('rg')}
                />
                {formik.errors.rg && formik.touched.rg ? <span>{formik.errors.rg}</span> : null}
            </Content>

            <Content>
                <TextField
                    label='numberCard:'
                    type="number"
                    autoComplete={false}
                    variant='outlined'
                    fullWidth
                    required
                    {...formik.getFieldProps('numberCard')}
                />

                {formik.errors.numberCard && formik.touched.numberCard ? <span>{formik.errors.numberCard}</span> : null}
            </Content>

            <Content>
                <TextField
                    label='Instituição da Formação'
                    type='text'
                    variant='outlined'
                    fullWidth
                    required
                    {...formik.getFieldProps('training_institution')}
                />
                {formik.errors.training_institution && formik.touched.training_institution ? <span>{formik.errors.training_institution}</span> : null}
            </Content>

            <Content>
                <FormControl variant="outlined" style={{ width: 120, marginLeft: 30 }}>
                    <InputLabel htmlFor="gener">Títulos:</InputLabel>
                    <Select
                        label="Títulos"
                        labelId="titles"
                        id="titles"
                        autoComplete={false}
                        required
                        {...formik.getFieldProps('titles')}
                    >
                        <MenuItem value='licensed'>Licenciado(a)</MenuItem>
                        <MenuItem value='specialist'>Especialista</MenuItem>
                        <MenuItem value='masters_degree'>Mestre</MenuItem>
                        <MenuItem value='doctor'>Doutor(a)</MenuItem>
                    </Select>
                </FormControl>
                {formik.errors.titles && formik.touched.titles ? <span>{formik.errors.titles}</span> : null}

                <TextField
                    label='Data de formação:'
                    type="date"
                    variant='outlined'
                    autoComplete={false}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...formik.getFieldProps('training_date')}
                />
                {formik.errors.training_date && formik.touched.training_date ? <span>{formik.errors.training_date}</span> : null}
            </Content>

            <ButtonGo
                onClick={() => {
                    setOpen(true)
                    console.log(formik.values)
                    setTimeout(() => {
                        history.push('/home')
                    }, time)
                    
                }}
                disabled={(!errorCPF && formik.values.rg && formik.values.numberCard && formik.values.training_institution && formik.values.titles && formik.values.training_date) ? false: true}
            >
                Finalizar Cadastro
            </ButtonGo>

            <ButtonBack
                type='submit'
                onClick={() => {
                    history.push('/home')
                }}
            >
                cancelar
            </ButtonBack>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" style={{ backgroundColor: ' #4caf50', color: 'white' }}>
                    Professor Cadastrado com Sucesso
                </Alert>
            </Snackbar>
        </>
    )
}