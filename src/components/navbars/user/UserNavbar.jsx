import {
  useColorMode,
  useDisclosure,
  Box, Flex, Stack, HStack,
  IconButton, Link, Button
} from "@chakra-ui/react"
import UserMenu from "./UserMenu"
import SearchInput from "./SearchInput"
import {
  SunIcon, MoonIcon,
  HamburgerIcon, CloseIcon,
} from "@chakra-ui/icons"

const LINKS = ["Home", "Connections", "Messages", "Notifications"]

const UserNavbar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Box bg="gray.200" px={4}>
      <Flex h={14} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        />
        <HStack ml={16} spacing={8} alignItems="center">
          <Box>
            {/* <Image src="/workflow_logo.svg" layout="fill" alt="logo"/> */}
          </Box>
          <SearchInput />
          <HStack
            as="nav" spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {LINKS.map(link => <Link key={link}>{link}</Link>)}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Stack direction="row" spacing={6}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <UserMenu/>
          </Stack>
        </Flex>
      </Flex>
      {
        isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {LINKS.map(link => <Link key={link}>{link}</Link>)}
            </Stack>
          </Box>
        ) : null
      }
    </Box>
  )
}

export default UserNavbar
