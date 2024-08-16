import * as C from "@chakra-ui/react"
import { Radio, RadioGroup } from '@chakra-ui/react'

const FormPessoal = () => {
    return(
        <C.VStack spacing={5}>
            <C.Text color="white"> Dados Pessoais</C.Text>
            <C.Input type="email" placeholder="Insira seu e-mail"/>
            <C.Input type="text" placeholder="Insira seu nome"/>
            <C.Input type="text" placeholder="Insira seu CPF"/>
            <C.Input type="text" placeholder="Insira seu telefone"/>
            <C.Text color="gray.500" w="370px" h="45px"textDecoration="underline" textAlign="center" justifyContent="center" marginBottom="-30px">Selecione seu Gênero:</C.Text>
            <C.RadioGroup>
                <C.VStack color="white" direction='row'>
                    <C.Radio colorScheme="purple" value='m'>Masculino</C.Radio>
                    <C.Radio colorScheme="purple" value='f'>Feminino</C.Radio>
                </C.VStack>
            </C.RadioGroup>
        </C.VStack>
    )
}


export default FormPessoal