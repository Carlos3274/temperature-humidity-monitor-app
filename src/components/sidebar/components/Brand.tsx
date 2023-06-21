// Chakra imports
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react'

// Custom components
import { HSeparator } from 'components/separator/Separator'

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white')

  return (
    <Flex alignItems="center" flexDirection="column" justifyContent="center">
      <Heading mb="32px" fontSize="4xl">
        IoT Monitor
      </Heading>
      <HSeparator mb="20px" />
    </Flex>
  )
}

export default SidebarBrand
