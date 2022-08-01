
const BottomBTN = (props) => {

	const {
		handleClick = Function.prototype,
		select,
		setSelect = Function.prototype
	} = props

	return (
		<div>
			<hr />
			<label>
				<input
					class="with-gap"
					name="group1"
					type="checkbox"
					onChange={() => setSelect({
						...select,
						regulations: !select.regulations
					})}
				/>
				<span>
					I have read and accept
					the <a href="!">Terms of Use</a>,
					confirm the amount due in accordance with
					the <a href="!">Recurring</a> <a href="!">Payments Policy</a></span>
			</label>
			<div>
				<button
					className="btn grey"
					onClick={() => handleClick("close")}
				>
					Cancel
				</button>

				<button
					type="submit"
					className="btn"
					onClick={() => handleClick("popup2")}
				>Ok
				</button>
			</div>
		</div>

	)
}

export { BottomBTN }