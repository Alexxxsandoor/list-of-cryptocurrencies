import React, { useEffect, useState } from "react"
import { API_URL, OPTIONS } from "../../config"
import { Preloader } from "../Preloader"
import { Coin } from "./Coin"
import { DownButton } from "./DownButton"

const CoinsList = () => {
	const [coinList, setCoinList] = useState([])
	const [loading, setLoading] = useState(false)


	useEffect(() => {
		fetch(API_URL, OPTIONS)
			.then((response) => response.json())
			.then(list => {
				setCoinList(list)
				setLoading(true)
			})
			.catch(err => {
				console.error(err)
				setLoading(false)
			});
	}, [])

	return (
		<div className="container">
			<div className="coins">
				<div className="coins-list">
					{!loading ?
						<Preloader />
						:
						<table >
							<tbody>
								{coinList.map((coin) => <Coin key={coin.symbol} {...coin} />)}
							</tbody>
						</table>
					}
				</div>
			</div>
			<DownButton />
		</div>
	)
}

export { CoinsList }