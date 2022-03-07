import { naam } from './filter.js'
import { alergenen } from './filter.js'
import { ingredients } from './filter.js'
import { afbeelding } from './filter.js'
import { errorState } from './errorState.js'

// Fetching the data
export function dataOphalen(barcodeValue) {
	let barcode = barcodeValue
	if (barcode) {
		fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json') // link from the external API
			.then(response => response.json())
			.then(data => {
				if (data.status_verbose === 'product not found') {
					errorState()
				} else {
					naam(data), alergenen(data), afbeelding(data), ingredients(data)
				}
			})
			.catch(err => {
				console.error(err)
			})
	}
}

dataOphalen()
