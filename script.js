const dataOphalen = () => {
	let barcode = 3168930158158
	fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json') // Dit is de link van de externe API
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(err => {
			console.error(err) // Als er iets mis gaat geeft deze catch een error weer in de console
		})
}

dataOphalen()
