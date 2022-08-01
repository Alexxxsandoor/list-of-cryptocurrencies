const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = "https://cryptodeck.p.rapidapi.com/coins"

const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'cryptodeck.p.rapidapi.com'
	}
};

const USER_BONUSE = 12;

const PRICE = [
	{
		id: 0,
		days: 30,
		price: 19.99
	},
	{
		id: 1,
		days: 180,
		price: 99.99
	},
	{
		id: 2,
		days: 360,
		price: 179.99,
	},
]

const PAYMENT = [
	{
		id: 10,
		name: "visa",
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
	},
	{
		id: 11,
		name: "paypal",
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
	}
]


const VALUE = 200
const BALANCE = 300

export {
	API_KEY,
	API_URL,
	OPTIONS,
	PRICE,
	USER_BONUSE,
	PAYMENT,
	VALUE,
	BALANCE
}