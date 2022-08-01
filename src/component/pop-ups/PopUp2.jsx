import { BottomBTN } from "./BottomBTN"
import { Payment } from "./Payment"
import { PAYMENT, VALUE, BALANCE } from "../../config"
import { useEffect, useState } from "react"

const PopUp2 = (props) => {
	const text = "Your balance CUPO does not have enough funds to pfy for your subscription. Please top up your balance CUPO to continue."

	const [select, setSelect] = useState({
		rate: "",
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
			onClick={() => handleClick("close")}
		>
			<div
				className="pop-up-window"
				onClick={e => e.stopPropagation()}
			>

				<h4 className="center white-text">Buy subscription</h4>

				<span
					style={{ color: "#DA4040", marginBottom: "30px" }}
				>
					{VALUE > BALANCE ? text : ""}
				</span>

				{PAYMENT.map(el =>
					<Payment
						key={el.name}
						select={select}
						setSelect={setSelect}
						{...el} />
				)}

				<div className="value-pay">
					<b>Replenishment amount USD:</b>
					<span>{-(VALUE - BALANCE)}</span>
				</div>

				<BottomBTN
					select={select}
					setSelect={setSelect}
					handleClick={handleClick}
				/>
			</div>
		</div>
	)
}
export { PopUp2 }