// Sorts out the correct product name (title)
export const name = data => {
	const h2 = document.querySelector('main>article h2')
	if (data.product.product_name) {
		h2.innerHTML = data.product.product_name
	} else {
		h2.innerHTML = 'Geen product titel gevonden'
	}
}

// Sorts out the correct image
export const picture = data => {
	const image = document.querySelector('main>article img')
	if (data.product.image_url) {
		image.src = data.product.image_url
	} else {
		image.src = './static/images/error.jpg'
	}
}

// Sorts out a list of allergens
export const allergens = data => {
	const allergens = data.product.allergens_imported
	const ulAllergens = document.querySelector('main>article ul:nth-of-type(1)')
	const h3Allergens = document.querySelector('main>article h3')
	if (allergens) {
		const allergensArray = allergens.split(',')
		ulAllergens.innerHTML = ''
		allergensArray.forEach(allergy => {
			let listItemAllergy = document.createElement('li')
			listItemAllergy.innerHTML = '- ' + allergy
			ulAllergens.appendChild(listItemAllergy)
			h3Allergens.innerHTML = 'Allergenen:'
		})
	} else {
		h3Allergens.innerHTML = 'Geen allergenen gevonden'
		ulAllergens.innerHTML = ''
	}
}

// Sorts out a list of ingredients
export const ingredients = data => {
	const h3Ingredients = document.querySelector('main>article h3:nth-of-type(2)')
	const ulIngredients = document.querySelector('main>article ul:nth-of-type(2)')
	if (data.product.ingredients_text_en) {
		const ingredients = data.product.ingredients_text_en
		const ingredientsArray = ingredients.split(',')
		ulIngredients.innerHTML = ''
		ingredientsArray.forEach(ingredient => {
			let listItemIngredients = document.createElement('li')
			listItemIngredients.innerHTML = '- ' + ingredient
			ulIngredients.appendChild(listItemIngredients)
			h3Ingredients.innerHTML = 'Ingredienten:'
		})
	} else {
		h3Ingredients.innerHTML = 'Geen ingredienten gevonden'
		ulIngredients.innerHTML = ''
	}
}
