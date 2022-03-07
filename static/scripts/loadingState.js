const loading = document.querySelector('main>div:nth-of-type(2)>div:nth-of-type(2)')

// add class loading-true to show the loading icon
export const loadingState = () => {
	loading.classList.add('loading-true')
}

// remove class loading-true to delete the loading icon
export const removeLoadingState = () => {
	loading.classList.remove('loading-true')
}
