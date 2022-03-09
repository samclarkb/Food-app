import { name } from './filter.js'
import { allergens } from './filter.js'
import { ingredients } from './filter.js'
import { picture } from './filter.js'
import { productNotFound } from './errorState.js'

// Fetching the data
export function getData(barcodeValue) {
	let barcode = barcodeValue
	let barcodeScanned = false
	if (barcode) {
		fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json') // link from the external API
			.then(response => response.json())
			.then(data => {
				if (data.status_verbose === 'product not found') {
					document.querySelector('main>div:last-of-type').classList.add('show') // Adds a classlist who changes the display into block instead of none
					document.getElementById('resultaten').scrollIntoView() // srolls into the results page
					// ! aka not operator, removes the empty state after the first scan
					if (!barcodeScanned) {
						document
							.querySelector('main>div:nth-of-type(2)>div:nth-of-type(4)') // This querySelector selects the emty state
							.remove()
						barcodeScanned = true
					}
					productNotFound()
				} else {
					document.querySelector('main>div:last-of-type').classList.add('show') // Adds a classlist who changes the display into block instead of none
					// ! aka not operator, removes the empty state after the first scan
					if (!barcodeScanned) {
						document
							.querySelector('main>div:nth-of-type(2)>div:nth-of-type(4)') // This querySelector selects the emty state
							.remove()
						barcodeScanned = true
					}
					document.getElementById('results').scrollIntoView() // srolls into the results page
					name(data), allergens(data), picture(data), ingredients(data) // Declares all the functions that generates the data from the API
				}
			})
			.catch(err => {
				console.error(err)
			})
	}
}
