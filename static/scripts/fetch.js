import { productNotFound } from './errorState.js'
import { removeEmpty } from './removeEmptyState.js'
import { showResults } from './showResults.js'

// Fetching the data
export function getData(barcodeValue) {
	let barcode = barcodeValue
	if (barcode) {
		fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json') // link from the external API
			.then(response => response.json())
			.then(data => {
				if (data.status_verbose === 'product not found') {
					removeEmpty()
					productNotFound()
				} else {
					removeEmpty()
					showResults(data)
				}
			})
			.catch(err => {
				console.error(err)
			})
	}
}
