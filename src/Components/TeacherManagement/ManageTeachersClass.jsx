import React from "react";
import { Box, Button, Dialog, DialogContent, DialogTitle, Fab, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { UlHeader } from "../Header/styled";

export function ManageTeachersClass() {

    const [show, setShow] = React.useState(false)
    const [dataSeries, setDataSeries] = React.useState({
        id: null,
        teacher: '',
        subjects: '',
        series: [
            { ano: '', turma: '' },
        ],
    })
    const [settingData, setSettingData] = React.useState({
        isCreate: false,
        isUpdate: false
    })
    const [teacherData, setTeacherData] = React.useState([
        {
            id: 1,
            teacher: 'Alexandre Nascimento',
            subjects: 'Matemática',
            series: [
                { ano: '7', turma: 'A' },
                { ano: '9', turma: 'C' }

            ],

        },
        {
            id: 2,
            teacher: 'Isa Viviane',
            subjects: 'Música',
            series: [
                { ano: '6', turma: 'A' },
                { ano: '8', turma: 'C' }

            ],

        },
        {
            id: 3,
            teacher: 'Ribmar',
            subjects: 'Biologia',
            series: [
                { ano: '7', turma: 'B' }
            ],

        },
        {
            id: 4,
            teacher: 'Lucas',
            subjects: 'Geografia',
            series: [
                { ano: 7, turma: 'B' },
                { ano: 9, turma: 'A' }

            ],

        },
        {
            id: 5,
            teacher: 'Wesley Batista',
            subjects: 'História',
            series: [
                { ano: 7, turma: 'A' },
                { ano: 9, turma: 'C' }
            ],

        },
    ])

    const handleClose = () => {
        setShow(false);
        setSettingData({ ...settingData, isCreate: false, isUpdate: false })
    };

    const findSeries = (id) => {
        setDataSeries(teacherData.find(sala => sala.id === id))
    }

    const deleteSerie = (turma) => {
        dataSeries.series.splice(turma, 1)
        setDataSeries(dataSeries)
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="teacher in class">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                Professor(a)
                            </TableCell>

                            <TableCell align="center">
                                Disciplina
                            </TableCell>

                            <TableCell align="center">
                                Ano e turma
                            </TableCell>

                            <TableCell align="center">
                                Ações
                            </TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {teacherData?.map((teacher) => (
                            <TableRow key={teacher.id}>
                                <TableCell align="center">
                                    {teacher.teacher}
                                </TableCell>

                                <TableCell align="center">
                                    {teacher.subjects}
                                </TableCell>

                                <TableCell align="center">
                                    {teacher.series?.map((serie, index) => (
                                        <ul>
                                            <li key={index}>{`${serie.ano}${serie.ano < 10 ? ' ºano' : ' Serie'} ${serie.turma}`}</li>
                                        </ul>
                                    ))}
                                </TableCell>

                                <TableCell align="center">

                                    <Tooltip title='adicionar'>
                                        <Fab
                                            size="small"
                                            color="primary"
                                            aria-label="add"
                                            onClick={() => {
                                                setShow(true)
                                                setSettingData({ ...settingData, isCreate: true })
                                            }}
                                        >
                                            <AddIcon fontSize="small" />
                                        </Fab>
                                    </Tooltip>
                                    {' '}
                                    <Tooltip title='editar'>
                                        <Fab
                                            size="small"
                                            color="secondary"
                                            aria-label="edit"
                                            onClick={() => {
                                                setShow(true)
                                                setSettingData({ ...settingData, isUpdate: true })
                                                findSeries(teacher.id)
                                            }}
                                        >
                                            <EditIcon fontSize="small" />
                                        </Fab>
                                    </Tooltip>


                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
            <Dialog
                open={show}
                onClose={handleClose}
                ria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    style={{ background: '#2b2d42', color: 'white', textAlign: 'right' }}
                >

                    {settingData.isCreate && (
                        <>
                            <p>Professor(a)</p>
                            <p>Adicionar turma</p>
                        </>
                    )}

                    {settingData.isUpdate && (
                        <>
                            <p>Professor(a)</p>
                            <p>Editar turmas</p>
                        </>
                    )}
                </DialogTitle>

                <DialogContent
                    style={{ background: '#666666' }}
                >

                    <>
                        {dataSeries.series?.map((serie) => (
                            <UlHeader>
                                <li>


                                    <FormControl>
                                        <InputLabel className="color">Serie/Ano:</InputLabel>

                                        <Select
                                            className='width-small color'
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={serie.ano}
                                        // onChange={handleChangeSeries}
                                        >
                                            <MenuItem value={1} > 1º Ano </MenuItem>
                                            <MenuItem value={2}> 2º Ano </MenuItem>
                                            <MenuItem value={3} > 3º Ano </MenuItem>
                                            <MenuItem value={4}> 4º Ano </MenuItem>
                                            <MenuItem value={5}> 5º Ano </MenuItem>
                                            <MenuItem value={6}> 6º Ano </MenuItem>
                                            <MenuItem value={7}> 7º Ano </MenuItem>
                                            <MenuItem value={8}> 8º Ano </MenuItem>
                                            <MenuItem value={9}> 9º Ano </MenuItem>
                                            <MenuItem value={10}> 1ª Serie </MenuItem>
                                            <MenuItem value={11}> 2º Serie </MenuItem>
                                            <MenuItem value={12}> 3º Serie </MenuItem>
                                        </Select>
                                    </FormControl>
                                </li>

                                <li>
                                    <FormControl>
                                        <InputLabel className="color">Turma:</InputLabel>

                                        <Select
                                            className='width-small color'
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={serie.turma}
                                        // onChange={handleChangeClass}
                                        >
                                            <MenuItem value='A'> A </MenuItem>
                                            <MenuItem value='B'> B </MenuItem>
                                            <MenuItem value='C'> C </MenuItem>

                                        </Select>
                                    </FormControl>
                                </li>
                                {settingData.isUpdate && (
                                    <Button color="secondary"
                                        onClick={() => {
                                            deleteSerie(serie.turma)
                                            console.log(dataSeries)
                                        }}
                                    > Remover turma </Button>
                                )}
                            </UlHeader>
                        ))}


                        <Button
                            onClick={() => {
                                setSettingData({ isCreate: false, isUpdate: false })
                                handleClose()
                            }}
                        >
                            Cancelar
                        </Button>

                        <Button >
                            Salvar
                        </Button>

                    </>

                </DialogContent>

            </Dialog>
        </>
    )
}