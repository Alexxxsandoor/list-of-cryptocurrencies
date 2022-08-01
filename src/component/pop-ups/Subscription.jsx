const Subscription = (props) => {

	const {
		setSelect = Function.prototype,
		select,
		days,
		price,
		id,
	} = props

	return (
		<div class="form_radio_btn">
			<input
				id={days}
				type="radio"
				name="radio"
				value={id}
				onChange={(event) => setSelect({
					...select,
					rate: event.target.value
				})}
				required />
			<label for={days}>{days} Days <span>{price}$</span></label>
		</div>
	)
}

export { Subscription }