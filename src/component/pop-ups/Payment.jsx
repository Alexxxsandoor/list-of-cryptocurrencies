const Payment = (props) => {
	const {
		url,
		name,
		setSelect = Function.prototype,
		select,
	} = props

	return (
		<div class="form_radio_btn">
			<input
				id={name}
				type="radio"
				name="radio2"
				value={name}
				onChange={(event) => setSelect({
					...select,
					rate: event.target.value
				})}
			/>
			<label for={name}><img className="payment-img" src={url} alt={name} /></label>
		</div>
	)
}

export { Payment }