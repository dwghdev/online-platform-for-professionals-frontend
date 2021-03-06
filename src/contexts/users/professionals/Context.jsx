import {createContext} from "react"
import {useAuth} from "@/auth_context"
import {userNavLinks} from "./userNavLinks"
import {userMenuItems} from "./userMenuItems"
import {useDisclosure} from "@chakra-ui/react"
import {zodResolver} from "@hookform/resolvers/zod"

import Schema from "./Schema"
import Inputs from "./Inputs"

// Actions
import Actions from "./Actions"
import ServicesProvider from "./services/Context"
import CalendlyTokenProvider from "./calendly_token/Context"
import WorkPortfoliosProvider from "./work_portfolios/Context"

const ProfessionalsContext = createContext()

const ProfessionalsProvider = ({children}) => {
  const {Provider} = ProfessionalsContext
  const {user, logout} = useAuth()
  const call = new Actions(user)

  const menuItems = modals => 
    userMenuItems(modals, logout)

  const navModals = {
    clientele: useDisclosure(),
    subscribers: useDisclosure()
  }

  const navLinks = userNavLinks(user.professionalId, navModals) 

  return (
    <Provider value={{
      navLinks,
      menuItems,
      navModals,

      // Form
      inputs: Inputs, 
      resolver: zodResolver(Schema),

      // User Details
      getLocation: call.getLocation,
      getContactInfo: call.getContactInfo,

      // User Professional
      updateUserProfessional: call.updateUser,

      // Professionals
      getProfessionals: call.getAll,
      getProfessional: call.getById,
      getUserProfessional: call.getUser,

      createProfessional: call.create,
      updateProfessional: call.update,
      deleteProfessional: call.delete,
    }}>
      <CalendlyTokenProvider>
        <ServicesProvider>
          <WorkPortfoliosProvider>
            {children}
          </WorkPortfoliosProvider>
        </ServicesProvider>
      </CalendlyTokenProvider>
    </Provider>
  )
}

export {
  ProfessionalsContext,
  ProfessionalsProvider, 
}
