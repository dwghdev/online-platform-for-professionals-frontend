import Head from "next/head"
import {signup} from "@/api/authApi"
import AuthLayout from "@/layouts/AuthLayout"
import {fetchLocations} from "@/api/locationsApi"
import {signUpInputs} from "@/constants/auth/signUpInputs"
import {QueryClient, useMutation, dehydrate} from "react-query"
import {signUpSchema as schema} from "@/validations/signUpSchema"

const SignUp = () => {
  const {
    isLoading, isError,
    mutateAsync, data, error
  } = useMutation("signup", signup)

  const submitHandler = async data => {
    console.log("submitted data: ", data)
    await mutateAsync({...data}) 
  }

  const linkTo = {
    href: "/login",
    text: "Already have an account?",
    linkText: "Sign in"
  }

  return (
    <main>
      <Head>
        <title>Create an Account</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout 
        schema={schema}
        linkTo={linkTo}
        submitValue="Join"
        isLoading={isLoading}
        inputList={signUpInputs}
        heading="Create an Account"
        submitHandler={submitHandler}
      />
    </main>
  )
}

export const getServerSideProps = async() => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery("locations", fetchLocations)

  return { props: { dehydrateState: dehydrate(queryClient)}}
}

export default SignUp
