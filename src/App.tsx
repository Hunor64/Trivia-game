import { useCookies } from "react-cookie"
import CookieConsent from "./components/CookieConsent"

const App = () => {
	const [cookie] = useCookies(["cookieConsent"])
	return <div>{!cookie["cookieConsent"] ? <CookieConsent /> : <></>}</div>
}

export default App
