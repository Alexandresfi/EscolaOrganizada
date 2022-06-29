import React from "react";
import { TextField} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ButtonBack, ButtonGo, Content } from "../TeacherManagement/styles";


export function PersonDataParents({formik,  updatePageProgress}) {
    const history = useHistory()

    return (

        <>
            <Content>
                <TextField
                    label='Nome completo do(a) Responsável:'
                    id='fullname'
                    variant='outlined'
                    fullWidth
                    required
                    autoComplete={false}
                    {...formik.getFieldProps('responsible')}
                />

                {formik.errors.responsible && formik.touched.responsible ? <span>{formik.errors.responsible}</span> : null}
            </Content>

            <Content>
                <TextField
                    label='Parentesco:'
                    id="surname"
                    variant='outlined'
                    autoComplete={false}
                    fullWidth
                    required
                    {...formik.getFieldProps('kinshi')}
                />

                {formik.errors.kinshi && formik.touched.kinshi ? <span>{formik.errors.kinshi}</span> : null}
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
                    {...formik.getFieldProps('telephone_1')}
                />

                {formik.errors.telephone_1 && formik.touched.telephone_1 ? <span>{formik.errors.telephone_1}</span> : null}
            </Content>

            <Content>
                <TextField
                    label='Celular de um segundo responsável'
                    id='telephone'
                    variant='outlined'
                    type="tel"
                    autoComplete={false}
                    fullWidth
                    required
                    {...formik.getFieldProps('telephone_2')}
                />

                {formik.errors.telephone_2 && formik.touched.telephone_2 ? <span>{formik.errors.telephone_2}</span> : null}
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
            </Content>

            <ButtonGo
                variant="contained" color="primary"
                onClick={()=> updatePageProgress(1, 50)}
                disabled={
                    (formik.values.responsible && 
                        formik.values.kinshi && 
                        formik.values.telephone_1  &&
                        formik.values.telephone_2 && 
                        formik.values.email && 
                        formik.values.birthdate && 
                        !formik.errors.email) ? false : true
                }
            >
                Avançar
            </ButtonGo>

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