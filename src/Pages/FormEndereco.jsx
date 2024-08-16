import * as C from "@chakra-ui/react"
import { Select } from '@chakra-ui/react'

const FormEndereco = () => {
    return(
        <C.VStack spacing={5}>
            <C.Text color="white">Endereços</C.Text>
            <C.Input type="email" placeholder="Insira seu CEP"/>
            <C.Input type="text" placeholder="Insira seu Bairro"/>
            <C.Select placeholder="Insira seu UF" color="gray.500">
                <option value="se">SERGIPE</option>
                <option value="al">ALAGOAS</option>
                <option value="sp">SÃO PAULO</option>
                <option value="ba">BAHIA</option>
                <option value="ma">MARANHÃO</option>
                <option value="pe">PERNAMBUCO</option>
                <option value="ce">CEARÁ</option>
                <option value="pb">PARAÍBA</option>
                <option value="rj">RIO DE JANEIRO</option>
                <option value="ap">AMAPÁ</option>
                <option value="rs">RIO GRANDE DO SUL</option>
                <option value="rn">RIO GRANDE DO NORTE</option>
                <option value="sc">SANTA CATARINA</option>
                <option value="pr">PARANÁ</option>
                <option value="mt">MATO GROSSO</option>
                <option value="mg">MINAS GERAIS </option>
                <option value="df">DISTRITO FEDERAL</option>
                <option value="am">AMAZONAS</option>
                <option value="go">GOIÁS</option>
                <option value="pa">PARÁ</option>
                <option value="es">ESPÍRITO SANTO</option>
                <option value="ms">MATO GROSSO DO SUL</option>
                <option value="ro">RONDÔNIA</option>
                <option value="rr">RORAIMA</option>
                <option value="ac">ACRE</option>
                <option value="to">TOCANTINS</option>
                <option value="pi">PIAUÍ</option>
            </C.Select>     
        </C.VStack>
    )
}


export default FormEndereco