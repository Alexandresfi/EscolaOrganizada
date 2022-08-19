import React from "react";
import { 
    BoxLef, 
    BoxRight, 
    ButtonLoginGoogle, 
    Container, 
    ContainerForm, 
    H1Login 
} from "./styles";
import GoggleImg from "../../assects/LogoGoogle.svg"
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { apiEscola } from "../../services/api";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";


const initialValues = {
    email : '',
    password: '',
    type_acess: '',
}

const validation = Yup.object().shape({
    email: Yup.string().email().required('O e-mail pe obrigatório'),
    password: Yup.string().min(8, 'precisa ter no mínimo 8 digitos').required('E a senha, não vai colocar não?'),
    type_acess: Yup.string().required('É necessário escolher um tipo de acesso')
})

export function Login() {

    const [routerSession, setRouterSession] = useState ('')
    
    const formik = useFormik({
        initialValues,
        validationSchema: validation,

        onSubmit: async clientData => {
            try{
                const { status, data } = await apiEscola.post(
                    routerSession,
                    {
                        email: clientData.email,
                        password: clientData.password
                    },
                    { validateStatus: () => true }

                    )

                    if(status === 201 || status === 200 ) {
                        toast.success('Login realizado com sucesso 😁')
                    }else if (status === 400 ) {
                        toast.error('Verifique seu e-mail, senha e o tipo de acesso 😔')
                    }else {
                        throw new Error()
                    }
                

            } catch (error) {
                toast.error('Falha no sistema! Tente novamente. 🤷‍♂️')
            }
        }
    })

    const handleChangeTypeAcess = (event) => {
        formik.setFieldValue('type_acess', event.target.value)
        event.target.value === "responsible" ? setRouterSession('session') : setRouterSession(`session-${event.target.value}`)
    }


    return (
        <Container>
            <BoxLef>
                <H1Login>
                    Muito mais que um cólegio, uma segunda família...
                </H1Login>
            </BoxLef>

            <BoxRight>

                <ButtonLoginGoogle onClick={()=> alert("Em breve.")}>
                    <img src={GoggleImg} alt='google' />
                    Entrar com o Google
                </ButtonLoginGoogle>

                <ContainerForm noValidate onSubmit={formik.handleSubmit} >

                    <TextField
                        id="email"
                        label="E-mail"
                        type="email"
                        placeholder="colegio@exemplo.com"
                        {...formik.getFieldProps('email')}
                        required
                        style={{color: "white"}}
                    />
                    {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

                    <TextField
                        id="password"
                        label="Senha"
                        type='password'
                        placeholder="Sua Senha"
                        {...formik.getFieldProps('password')}
                        required
                        style={{color: "white"}}
                    />
                    {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
                    
                    <FormControl>
                    <InputLabel  style={{paddingLeft: "15px", color: "white"}}>Tipo de acessp:</InputLabel>

                    <Select
                    id="type_acess"
                    variant='outlined'
                    style={{width: "180px", color: "white"}}
                    onChange={handleChangeTypeAcess}>
                        <MenuItem value='admin' > Admin </MenuItem>
                        <MenuItem value='teacher'> Professor(a) </MenuItem>
                        <MenuItem value='responsible' > Responsável </MenuItem>
                    </Select>
                    </FormControl>
                    {formik.touched.type_acess && formik.errors.type_acess ? (<div>{formik.errors.type_acess}</div>) : null}

                    <button type="submit">
                        {/* <Link to='/home'> */}
                            Login
                        {/* </Link> */}
                    </button>

                    <p>Esqueceu sua senha? <span> Clique Aqui!</span></p>
                </ContainerForm>

            </BoxRight>



        </Container>
    )
}