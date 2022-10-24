import { products, addProduct } from './products/product.services'

addProduct({
	id: '5',
	description: 'description',
	image: 'image',
	color: 'color',
	size: 'M',
	price: 55,
	isNew: true,
	tags: ['tag1', 'tag2'],
	title: 'Hola Mundo',
	createdAt: new Date(),
	updatedAt: new Date(),
	stock: 13,
	category: {
		id: 'id',
		name: 'name',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
})

console.log(products)
