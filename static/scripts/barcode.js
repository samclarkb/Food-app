import { getData } from './fetch.js'
import { enableButton } from './ui.js'
import { loadingState, removeLoadingState } from './loadingState.js'

export async function detect() {
	loadingState()
	const barcodeDetector = new BarcodeDetector() // Build in Javascript method
	const cameraFrame = document.querySelector('main>section:nth-of-type(1)>div:nth-of-type(1)') // Refers to the section of the placement of the camera
	let itemsFound = [] // Variable of an empty array
	let barcodeValue
	const mediaStream = await navigator.mediaDevices.getUserMedia({
		video: { facingMode: 'environment' }, // enables the back side of the camera of a phone
	})
	const video = document.createElement('video')
	video.srcObject = mediaStream

	await video.play()
	removeLoadingState() // Removes the loading animation

	cameraFrame.append(video) // Adds a video to the page

	function render() {
		barcodeDetector
			.detect(video)
			.then(barcodes => {
				barcodes.forEach(barcode => {
					if (!itemsFound.includes(barcode.rawValue)) {
						// When the barcode doesn't contains an empty array then fire this function
						itemsFound.push(barcode.rawValue)
						barcodeValue = barcode.rawValue
						getData(barcodeValue)
						video.remove() // Removes the video
						window.location.hash = barcodeValue
						enableButton() // enables the button so you can scan an other product if you want to
					}
				})
			})
			.catch(console.error)
	}

	const renderLoop = () => {
		requestAnimationFrame(renderLoop) //
		render()
	}
	renderLoop()
}

export const renderProduct = barcodeHash => {
	const results = document.getElementById('results')
	getData(barcodeHash)
	results.scrollIntoView() // Scrolls into the results page when a hash has inserted
}

// Source: Webmentions. (2021). Detecting barcodes from the webcam. Detecting barcodes from the webcam. https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/
