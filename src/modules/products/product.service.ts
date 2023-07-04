import { Injectable } from '@nestjs/common'
import { ProductDto } from 'src/dto/product.dto'
import { Product } from 'src/models/product.model'

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 2, price: 80000, productName: 'Keyboard' },
    { id: 2, categoryId: 3, price: 90000, productName: 'Nine Dev' },
  ]
  getProducts(): Product[] {
    return this.products
  }

  addProduct(productDto): ProductDto {
    const product: Product = {
      id: Math.random(),
      ...productDto,
    }
    this.products.push(product)
    return product
  }

  getProductDetail(id: number): Product {
    return this.products.find((product) => product.id === Number(id))
  }
}
