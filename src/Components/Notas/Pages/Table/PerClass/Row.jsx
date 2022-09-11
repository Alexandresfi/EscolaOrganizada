import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export function Row({ student, ...res }) {
  const [open, setOpen] = React.useState(false)

  const mediaQuarter = grades => {
    console.log('notas: ', grades.length, grades)
    return (grades.nota_1 + grades.nota_2 + grades.nota_3) / 3
  }

  return (
    <React.Fragment>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset' }
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {student.name}
        </TableCell>
        <TableCell align="center">
          {student?.grades[0].grades.first_quarter.nota_1}
        </TableCell>
        <TableCell align="center">
          {student?.grades[0].grades.first_quarter.nota_2}
        </TableCell>
        <TableCell align="center">
          {student?.grades[0].grades.first_quarter.nota_3}
        </TableCell>
        <TableCell align="center">
          {(student?.grades[0].grades.first_quarter.nota_1 +
            student?.grades[0].grades.first_quarter.nota_2 +
            student?.grades[0].grades.first_quarter.nota_3) /
            3}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Resumo de notas
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Disciplinas</TableCell>
                    <TableCell>1º Trimestre</TableCell>
                    <TableCell align="center">2º Trimestre</TableCell>
                    <TableCell align="center">3º Trimestre</TableCell>
                    <TableCell align="center">Media Trimestral</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {student?.grades.map(grade => (
                    <TableRow key={res}>
                      <TableCell component="th" scope="row">
                        {grade.disciplina}
                      </TableCell>
                      <TableCell>
                        {mediaQuarter(grade.grades.first_quarter)}
                      </TableCell>
                      <TableCell align="center">
                        {mediaQuarter(grade.grades.second_quarter)}
                      </TableCell>
                      <TableCell align="center">
                        {mediaQuarter(grade.grades.third_quarter)}
                      </TableCell>
                      <TableCell align="center">Não atribuída</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

Row.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    grades: PropTypes.any
  }).isRequired
}
