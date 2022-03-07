const h2 = document.querySelector('main > div:last-of-type h2')
const ulAllergens = document.querySelector('main > div:last-of-type ul')
const image = document.querySelector('main > div:last-of-type img')

// Sorts out the correct product name (title)
export const naam = data => {
	console.log(data.product.product_name)
	if (data.product.product_name) {
		h2.innerHTML = data.product.product_name
	} else {
		h2.innerHTML = 'Geen product titel gevonden'
	}
}

// Sorts out the correct image
export const afbeelding = data => {
	if (data.product.image_url) {
		image.src = data.product.image_url
	} else {
		image.innerHTML = 'Geen product afbeelding beschikbaar'
	}
}

// Sorts out the correct list of allergens
export const alergenen = data => {
	const allergens = data.product.allergens_imported
	const allergensArray = allergens.split(',')
	ulAllergens.innerHTML = ''
	allergensArray.forEach(allergy => {
		let listItemAllergy = document.createElement('li')
		if (allergy !== '') {
			listItemAllergy.innerHTML = allergy
			ulAllergens.appendChild(listItemAllergy)
		} else {
			ulAllergens.innerHTML = 'nope'
		}
	})
}
