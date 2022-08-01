import { BottomBTN } from "./BottomBTN"
import { PRICE } from "../../config"
import { Subscription } from "./Subscription"
import { BonuseInput } from "./BonuseInput"
import { useEffect, useState } from "react"

const PopUp1 = (props) => {

	const [select, setSelect] = useState({
		rate: 0,
		bonuse: false,
		regulations: false,
	})

	const {
		handleClick = Function.prototype
	} = props

	useEffect(() => {
		console.log(select)
	}, [select])

	return (

		<div
			className="pop-up-back"
			onClick={() => handleClick("popup1")}
		>

			<div
				className="pop-up-window center"
				onClick={e => e.stopPropagation()}
			>

				<h4 className="white-text">Continue subscription</h4>

				<form action="q">

					<>
						{PRICE.map((el, index) =>
							<Subscription
								select={select}
								setSelect={setSelect}
								key={el.id}
								index={index}
								{...el} />)}
					</>

					<BonuseInput
						select={select}
						setSelect={setSelect}
					/>

					<BottomBTN
						select={select}
						setSelect={setSelect}
						handleClick={handleClick}
					/>
				</form>
			</div>
		</div>
	)
}
export { PopUp1 }