import {Box, Input} from '@chakra-ui/react'

const PaginateInput = ({table}) => {
  const {
    state: {pageIndex},
    gotoPage, pageCount
  } = table

  return (
    <Box w={150} d="inline" fontWeight="bold">
      Page{" "}
      <Input 
        w={50}
        size="sm"
        maxLength="2"
        borderRadius={5}
        fontWeight="bold"
        textAlign="center"
        defaultValue={pageIndex+1}
        onChange={e => {
          const {value} = e.target
          const pageNo = value ? Number(value) - 1 : 0
          gotoPage(pageNo)
        }}
      />{" "}
      <strong>of {pageCount}</strong>{" "}
    </Box>
  )
}

export default PaginateInput
