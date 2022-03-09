const loading = document.getElementById('loading')

// Shows the loading state
export const loadingState = () => {
	loading.classList.add('loading-true') // Adds a classlist who changes the display into block instead of none
}

// Removes the loading state
export const removeLoadingState = () => {
	loading.classList.remove('loading-true') // Adds a classlist who changes the display into none instead of block
}
