import { useCookies } from "react-cookie"
import CookieConsent from "./components/CookieConsent"
import { useEffect, useState } from "react"
import { getTrivias } from "./service/TriviaService"

type TriviaType = {
	type: string
	difficulty: string
	category: string
	question: string
	correct_answer: string
	incorrect_answers: string[]
}

const App = () => {
	const [cookie] = useCookies(["cookieConsent"])

	const [trivias, setTrivias] = useState<TriviaType[]>([])

	const [triviaIndex, setTriviaIndex] = useState(0)

	useEffect(() => {
		getTrivias().then((data) => {
			setTrivias(data)
		})
	}, [])
	const nextQuestion = () => {
		if (triviaIndex < trivias.length - 1) {
			setTriviaIndex(triviaIndex=>triviaIndex + 1)
		}
	}
	return (
		<div>
			<p>
				{trivias.length > 0 ? trivias[triviaIndex].question : <></>}
				<button onClick={nextQuestion}>NEXT</button>
			</p>
			{!cookie["cookieConsent"] ? <CookieConsent /> : <></>}
		</div>
	)
}

export default App
