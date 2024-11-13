/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCookies } from "react-cookie"
import styles from "./cookie-consent/CookieConsent.module.css"

const CookieConsent = () => {
	const [_, setCookie] = useCookies(["cookieConsent"])

	const acceptCookies = () => {
		setCookie("cookieConsent", true)
        
	}

	return (
		<>
			<div className={styles.wrapper}>
				<p>
					This website uses cookies to ensure you get the best
					experience on our website.
				</p>
				<button onClick={() => acceptCookies}>Accept</button>
			</div>
		</>
	)
}

export default CookieConsent
