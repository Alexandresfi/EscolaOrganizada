import React from "react"
import { ContainerButton } from "./styles"

function ButtonBack ({ children, ...props }) {
    return <ContainerButton {...props}>{children}</ContainerButton>
}

export default ButtonBack