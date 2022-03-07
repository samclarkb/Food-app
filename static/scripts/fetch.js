import { name } from './filter.js'
import { allergens } from './filter.js'
import { ingredients } from './filter.js'
import { image } from './filter.js'
import { productNotFound } from './errorState.js'
import { removeLoadingState } from './loadingState.js'

// Fetching the data
export function getData(barcodeValue) {
	let barcode = barcodeValue
	if (barcode) {
		fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json') // link from the external API
			.then(response => response.json())
			.then(data => {
				if (data.status_verbose === 'product not found') {
					productNotFound()
				} else {
					removeLoadingState
					name(data), allergens(data), image(data), ingredients(data)
				}
			})
			.catch(err => {
				console.error(err)
			})
	}
}
