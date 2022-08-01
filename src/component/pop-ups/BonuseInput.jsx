import { USER_BONUSE } from "../../config"

const BonuseInput = (props) => {

	const {
		select,
		setSelect = Function.prototype
	} = props

	const value = () => {
		return USER_BONUSE <= 0 ? 'disabled' : ""
	}

	const colorText = () => {
		return USER_BONUSE > 0 ? '#4643D0' : ""
	}

	return (
		<label>
			<input
				type="checkbox"
				disabled={value()}
				required
				onChange={() => setSelect({
					...select,
					bonuse: !select.bonuse
				})}
			/>
			<span className="bonuses">
				<span style={{
					float: "left"
				}}
				>
					Use bonuses</span>
				<span
					style={{
						color: colorText(),
						float: "right",
						fontSize: "24px"
					}}>
					{USER_BONUSE}
				</span>
			</span>
		</label>
	)
}
export { BonuseInput }