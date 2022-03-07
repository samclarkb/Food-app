import { renderProduct } from './barcode.js'
import './vendor/routie.js'

export const handleRoutes = () => {
	routie({
		':id': id => {
			renderProduct(id)
		},
	})
}
