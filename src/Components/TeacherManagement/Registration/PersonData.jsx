import React from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@material-ui/core";
import { Content } from "../styles";
import Button from "../../ButtonProceed";
import ButtonBack from "../../ButtonBack";
import { useHistory } from "react-router-dom";


export function PersonData({formik,  updatePageProgress}) {
    const history = useHistory()

    return (

        <>
            <Content>
                <TextField
                    label='Nome completo:'
                    id='fullname'
                    variant='outlined'
                    fullWidth
                    required
                    autoComplete={false}
                    {...formik.getFieldProps('fullname')}
                />

                {formik.errors.fullname && formik.touched.fullname ? <span>{formik.errors.fullname}</span> : null}
            </Content>

            <Content>
                <TextField
                    label='Apelido:'
                    id="surname"
                    variant='outlined'
                    autoComplete={false}
                    fullWidth
                    required
                    {...formik.getFieldProps('surname')}
                />

                {formik.errors.surname && formik.touched.surname ? <span>{formik.errors.surname}</span> : null}
            </Content>

            <Content>
                <TextField
                    label='Celular'
                    id='telephone'
                    variant='outlined'
                    type="tel"
                    autoComplete={false}
                    fullWidth
                    required
                    {...formik.getFieldProps('telephone')}
                />

                {formik.errors.telephone && formik.touched.telephone ? <span>{formik.errors.telephone}</span> : null}
            </Content>

            <Content>
                <TextField
                    label='E-mail:'
                    id='email'
                    variant='outlined'
                    type="email"
                    autoComplete={false}
                    fullWidth
                    required
                    {...formik.getFieldProps('email')}
                />

                {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : null}
            </Content>

            <Content>
                <TextField
                    label='Data de aniversário:'
                    id="birthdate"
                    type="date"
                    variant='outlined'
                    required
                    autoComplete={false}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...formik.getFieldProps('birthdate')}
                />
                {formik.errors.birthdate && formik.touched.birthdate ? <span>{formik.errors.birthdate}</span> : null}

                <FormControl variant="outlined" style={{ width: 120, marginLeft: 30 }}>
                    <InputLabel htmlFor="gener">Gênero:</InputLabel>
                    <Select
                        label="Gênero"
                        labelId="gener"
                        id="gener"
                        autoComplete={false}
                        required
                        {...formik.getFieldProps('gener')}
                    >
                        <MenuItem value='masculine'>Masculio</MenuItem>
                        <MenuItem value='feminine'>Feminino</MenuItem>
                    </Select>
                </FormControl>
                {formik.errors.gener && formik.touched.gener ? <span>{formik.errors.gener}</span> : null}

            </Content>

            <Button
                variant="contained" color="primary"
                onClick={()=> updatePageProgress(1, 50)}
                disabled={
                    (formik.values.fullname && 
                        formik.values.surname && 
                        formik.values.telephone && 
                        formik.values.email && 
                        formik.values.birthdate && 
                        formik.values.gener && 
                        !formik.errors.email) ? false: true
                }
            >
                Avançar
            </Button>

            <ButtonBack
             onClick={() => {
                history.goBack()
            }}
            >
                cancelar
            </ButtonBack>

        </>
    )
}