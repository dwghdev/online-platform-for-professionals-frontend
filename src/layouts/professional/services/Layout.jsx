import Navbar from "@/layouts/navbar/Navbar"
import {useAppState} from "@/context/state/Context"

function ServicesLayout(props) {
  const {useAuth, useProfessionals} = useAppState()
  const {navLinks} = useProfessionals()
  const {user} = useAuth()

  return (
    <>
      <Navbar 
        user={user} 
        links={navLinks}
        fullname={props.fullname}
      />
    </>
  )
}


export default ServicesLayout
