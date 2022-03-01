import { naam } from './filter.js'
import { alergenen } from './filter.js'
import { afbeelding } from './filter.js'

// Fetching the data
export function dataOphalen(barcodeValue) {
	let barcode = barcodeValue
	if (barcode) {
		fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json') // link from the external API
			.then(response => response.json())
			.then(data => {
				naam(data), alergenen(data), afbeelding(data)
			})
			.catch(err => {
				console.error(err)
			})
	}
}

dataOphalen()
