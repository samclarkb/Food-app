const h2 = document.querySelector('main > div:last-of-type h2')
const ulAllergens = document.querySelector('main > div:last-of-type ul:nth-of-type(1)')
const ulIngredients = document.querySelector('main > div:last-of-type ul:nth-of-type(2)')
const image = document.querySelector('main > div:last-of-type img')

// Sorts out the correct product name (title)
export const name = data => {
	console.log(data.product.product_name)
	if (data.product.product_name) {
		h2.innerHTML = data.product.product_name
	} else {
		h2.innerHTML = 'Geen product titel gevonden'
	}
}

// Sorts out the correct image
export const image = data => {
	if (data.product.image_url) {
		image.src = data.product.image_url
	} else {
		image.innerHTML = 'Geen product afbeelding beschikbaar'
	}
}

// Sorts out a list of allergens
export const allergens = data => {
	const allergens = data.product.allergens_imported
	const allergensArray = allergens.split(',')
	ulAllergens.innerHTML = ''
	allergensArray.forEach(allergy => {
		let listItemAllergy = document.createElement('li')
		if (allergy !== '') {
			listItemAllergy.innerHTML = '- ' + allergy
			ulAllergens.appendChild(listItemAllergy)
		} else {
			ulAllergens.innerHTML = 'Geen alergenen gevonden'
		}
	})
}

// Sorts out a list of ingredients
export const ingredients = data => {
	if (data.product.ingredients_text_en) {
		const ingredients = data.product.ingredients_text_en

		const ingredientsArray = ingredients.split(',')
		ulIngredients.innerHTML = ''
		ingredientsArray.forEach(ingredient => {
			let listItemIngredients = document.createElement('li')
			if (ingredient !== '') {
				listItemIngredients.innerHTML = '- ' + ingredient
				ulIngredients.appendChild(listItemIngredients)
			}
		})
	} else {
		ulIngredients.innerHTML = 'Geen ingredienten gevonden'
	}
}
