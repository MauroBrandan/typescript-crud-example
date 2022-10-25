import { faker } from '@faker-js/faker'
import { products, addProduct, updateProduct } from './products/product.services'

for (let index = 0; index < 5; index++) {
	addProduct({
		description: faker.commerce.productDescription(),
		image: faker.image.imageUrl(),
		color: faker.color.human(),
		size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
		price: parseInt(faker.commerce.price(), 10),
		isNew: faker.datatype.boolean(),
		tags: faker.helpers.arrayElements(),
		title: faker.commerce.productName(),
		stock: faker.datatype.number({ min: 10, max: 100 }),
		categoryId: faker.datatype.uuid(),
	})
}

console.log(products)

const product = products[0]
updateProduct(product.id, {
	title: 'Hola Mundo',
	stock: 5,
})

console.log(products)
