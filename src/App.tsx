import { useCookies } from "react-cookie"
import CookieConsent from "./components/CookieConsent"

const App = () => {
	const [cookie] = useCookies(["cookieConsent"])

	return <>
  {
      !cookie["cookieConsent"] ? 
      <CookieConsent /> : 
    <></>
    }
    </>
}

export default App
