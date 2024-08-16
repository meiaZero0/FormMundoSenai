import React from 'react'
import * as C from '@chakra-ui/react'

const Step = ({index, active}) => {
    return(
        <C.Center>
            <C.Box
                py={4}
                px={4}
                borderRadius={2}
                bg={active ? 'purple.500':'white'}
                color={active ? 'white':'blackAlpha'}
                style={{scale:active ? '1.2':'none'}}
            >
            {index}
            </C.Box>
        </C.Center>
    )
}

export default Step