import { name } from './filter.js'
import { allergens } from './filter.js'
import { ingredients } from './filter.js'
import { picture } from './filter.js'

const results = document.getElementById('results')

export const showResults = data => {
	results.scrollIntoView() // srolls into the results page
	results.classList.add('show') // Adds a classlist who changes the display into block instead of none
	name(data), allergens(data), picture(data), ingredients(data) // Declares all the functions that generates the data from the API
}
