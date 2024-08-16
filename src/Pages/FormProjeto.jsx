import * as C from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const FormProjeto = () => {
    return(
        <C.VStack spacing={5}>
            <C.Text color="white">Seu Projeto</C.Text>
            <C.Input type="email" placeholder="Insira seu Projeto"/>
            <C.Input type="text" placeholder="Área de atuação"/>
            <C.Input type="text" placeholder="Coordenador/Professor"/>
            <C.Text color="gray.500" w="300px" h="50px" textAlign="center" justifyContent="center" textDecoration="underline" marginBottom="-30px">Selecione sua Escola:</C.Text>
            <Checkbox colorScheme='purple' color="white">CETCC</Checkbox>
            <Checkbox colorScheme='purple' color="white">CETAFEST</Checkbox>
            <Checkbox colorScheme='purple' color="white">CETICC</Checkbox>
            <Checkbox colorScheme='purple' color="white">CETAFAJU</Checkbox>
        </C.VStack>
    )
}


export default FormProjeto