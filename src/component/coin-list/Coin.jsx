const Coin = (props) => {
	const urlDeffImg = "https://e7.pngegg.com/pngimages/944/747/png-clipart-coins-coins-thumbnail.png"

	const {
		symbol,
		icon_url,
		name,
		price,
		pct_change,
		vol_in_currency,
		circ_supply
	} = props

	const colorProcent = (value) => {
		return (
			+value.split('%')[0] < 0
				?
				"red"
				:
				"green"
		)
	}

	return (
		<tr>

			<td>
				<img
					src={icon_url ? icon_url : urlDeffImg}
					alt={name}>
				</img>
				<b>{symbol.split('-')[0]}</b>
			</td>

			<td>
				<b>${price}</b>
			</td>

			<td >
				<span style={{ color: colorProcent(pct_change) }}>
					{pct_change}
				</span> Last 24h
			</td>

			<td>
				<b>{circ_supply}</b>

				<br />

				<span>{vol_in_currency}</span>
			</td>

		</tr>
	)
}

export { Coin }