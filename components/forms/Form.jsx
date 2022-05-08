import InputMap from "./InputMap"
import {useQuery} from "react-query"
import {fetchLocations} from "@/api/locationsApi"
import GroupSelectInput from "./GroupSelectInput"
import {Flex, Checkbox, Button} from "@chakra-ui/react"

const Form = props => {
  const { 
    formHook, isLoginAuth, inputList, 
    submitHandler, submitValue } = props

  const {data: locations} = useQuery("locations", 
    fetchLocations, { enabled: !isLoginAuth })

  const {
    register, handleSubmit, 
    formState: {errors, isSubmitting}
  } = formHook

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {<InputMap 
        errors={errors}
        register={register}
        inputList={inputList}
      />}
      {isLoginAuth &&
        <Flex mt={4} justify="space-between" align="center">
          <Checkbox colorScheme="teal">
            Remember me
          </Checkbox>
          <Button 
            bg="none"
            color="teal" 
            borderRadius={60}
          >Forgot Password?
          </Button>
        </Flex>
      }
      {/* TODO: */}
      {/* {!isLoginAuth && */}
      {/*   <GroupSelectInput  */}
      {/*     label="Locations" */}
      {/*     options={locations} */}
      {/*   /> */}
      {/* } */}
      <Button 
        type="submit" 
        mt={4} w="100%"
        colorScheme="teal" 
        isLoading={isSubmitting}
      > {submitValue}
      </Button>
    </form>
  )
}

export default Form
