const h2 = document.querySelector('main > div:last-of-type h2')
const p = document.querySelector('main > div:last-of-type p')
const image = document.querySelector('main > div:last-of-type img')

// Sorts out the correct product name (title)
export const naam = data => {
	console.log(data)
	console.log(data.product.product_name)
	h2.innerHTML = data.product.product_name
}

// Sorts out the correct image
export const afbeelding = data => {
	image.src = data.product.image_url
}

// Sorts out the correct list of allergens
export const alergenen = data => {
	p.innerHTML = data.product.allergens_hierarchy
}
