import React from "react";
import { Container } from "./styles";

export function ClassCards ({year, schoolClass}) {
   
    return(
    <>
        {schoolClass.map((item, index)=> (
            <Container key={index}>
            <p> {year} </p>
            <p> {item} </p>
            </Container>
        ))}
    </>
    )
}