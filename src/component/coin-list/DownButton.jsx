import { useState } from "react"
import { PopUp1 } from "../pop-ups/PopUp1"
import { PopUp2 } from "../pop-ups/PopUp2"

const DownButton = () => {

	const [popup1, setpopup1] = useState(false)
	const [popup2, setpopup2] = useState(false)

	const handleClick = (popup) => {
		switch (popup) {
			case 'popup1':
				setpopup1(!popup1)
				if (popup2) setpopup2(false)
				break;
			case 'popup2':
				setpopup2(!popup2)
				if (popup1) setpopup1(false)
				break;
			case 'close':
				setpopup1(false)
				setpopup2(false)
				break;
			default:
				break;
		}
	}

	return (
		<>
			{popup1 ? <PopUp1 handleClick={handleClick} /> : <></>}
			{popup2 ? <PopUp2 handleClick={handleClick} /> : <></>}
			<div className="center">
				<button
					onClick={() => handleClick("popup1")}
					className="btn green "
				>
					1
				</button>
				<button
					onClick={() => handleClick("popup2")}
					className="btn red darken-3"
				>
					2
				</button>
			</div>
		</>

	)
}

export { DownButton }