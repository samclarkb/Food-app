import { getData } from './fetch.js'
import { enableButton } from './ui.js'
import { loadingState, removeLoadingState } from './loadingState.js'

export async function detect() {
	loadingState()
	const barcodeDetector = new BarcodeDetector()
	const list = document.querySelector('main>div:nth-of-type(2)>div:nth-of-type(1)')
	let itemsFound = []
	const mediaStream = await navigator.mediaDevices.getUserMedia({
		video: { facingMode: 'environment' },
	})

	let barcodeValue

	const video = document.createElement('video')
	video.srcObject = mediaStream

	await video.play()
	removeLoadingState()

	list.append(video)

	function render() {
		barcodeDetector
			.detect(video)
			.then(barcodes => {
				barcodes.forEach(barcode => {
					if (!itemsFound.includes(barcode.rawValue)) {
						itemsFound.push(barcode.rawValue)
						barcodeValue = barcode.rawValue
						getData(barcodeValue)
						video.remove()
						window.location.hash = barcodeValue
						enableButton()
						console.log(document.querySelector('main>div:last-of-type'))
						document.getElementById('resultaten').scrollIntoView()
					}
				})
			})
			.catch(console.error)
	}

	const renderLoop = () => {
		requestAnimationFrame(renderLoop)
		render()
	}
	renderLoop()
}

export const renderProduct = barcodeHash => {
	getData(barcodeHash)
	document.getElementById('resultaten').scrollIntoView({ block: 'end' })
}

// Source: https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/
