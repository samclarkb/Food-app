export function dataOphalen(barcodeValue) {
	let barcode = barcodeValue
	if (barcode) {
		fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json') // Dit is de link van de externe API
			.then(response => response.json())
			.then(data => {
				// console.log(data)
				naam(data), alergenen(data), afbeelding(data)
			})
			.catch(err => {
				console.error(err) // Als er iets mis gaat geeft deze catch een error weer in de console
			})
	}
}

const h2 = document.querySelector('h2')
const p = document.querySelector('div:nth-of-type(2) ul li')
const image = document.querySelector('main>div:nth-of-type(2)>div:nth-of-type(3)>img')

const naam = data => {
	console.log(data)
	console.log(data.product.abbreviated_product_name)
	h2.innerHTML = data.product.abbreviated_product_name
}

const afbeelding = data => {
	image.src = data.product.image_url
}
const alergenen = data => {
	p.innerHTML = data.product.allergens_hierarchy
}

dataOphalen()
