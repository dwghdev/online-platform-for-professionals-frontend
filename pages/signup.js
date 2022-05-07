import Head from 'next/head'
import AuthLayout from "@/layouts/AuthLayout"
import {signUpInputs as inputList} from "@/constants/authInputFields"

const SignUp = () => {
  const submitHandler = data => {
    console.log("submitted data: ", data)
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
        linkTo={linkTo}
        buttonLabel="Join"
        inputList={inputList}
        heading="Create an Account"
        submitHandler={submitHandler}
      />
    </main>
  )
}

export default SignUp
