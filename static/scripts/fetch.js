import { name } from './filter.js'
import { allergens } from './filter.js'
import { ingredients } from './filter.js'
import { picture } from './filter.js'
import { productNotFound } from './errorState.js'
import { removeLoadingState } from './loadingState.js'

// Fetching the data
export function getData(barcodeValue) {
	let barcode = barcodeValue
	let barcodeScanned = false
	if (barcode) {
		fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json') // link from the external API
			.then(response => response.json())
			.then(data => {
				if (data.status_verbose === 'product not found') {
					productNotFound()
				} else {
					removeLoadingState()
					document.querySelector('main>div:last-of-type').classList.add('show')
					if (!barcodeScanned) {
						document
							.querySelector('main>div:nth-of-type(2)>div:nth-of-type(4)')
							.remove()
						barcodeScanned = true
					}
					document.getElementById('resultaten').scrollIntoView()
					name(data), allergens(data), picture(data), ingredients(data)
				}
			})
			.catch(err => {
				console.error(err)
			})
	}
}
