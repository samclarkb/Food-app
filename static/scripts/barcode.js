import { dataOphalen } from './fetch.js'

async function detect() {
	const barcodeDetector = new BarcodeDetector()
	const list = document.querySelector('main>div:nth-of-type(2)>div:nth-of-type(1)')
	let itemsFound = []
	const mediaStream = await navigator.mediaDevices.getUserMedia({
		video: { facingMode: 'environment' },
	})

	let barcodeValue

	const video = document.createElement('video')
	video.srcObject = mediaStream
	video.autoplay = true

	list.append(video)

	function render() {
		barcodeDetector
			.detect(video)
			.then(barcodes => {
				barcodes.forEach(barcode => {
					if (!itemsFound.includes(barcode.rawValue)) {
						itemsFound.push(barcode.rawValue)
						barcodeValue = barcode.rawValue
						dataOphalen(barcodeValue)
						video.remove()
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
// activeren van de barcode
const scanner = document.querySelector('button')

scanner.addEventListener('click', detect)
