const dataOphalen = () => {
	let barcode = 3168930158158
	fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json') // Dit is de link van de externe API
		.then(response => response.json())
		.then(data => {
			naam(data)
		})
		.catch(err => {
			console.error(err) // Als er iets mis gaat geeft deze catch een error weer in de console
		})
}

const h2 = document.querySelector('h2')

const naam = data => {
	console.log(data)
	console.log(data.product.abbreviated_product_name)
	h2.innerHTML = data.product.abbreviated_product_name
}

dataOphalen()
