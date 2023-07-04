import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getProducts(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Post()
  createProduct(@Body(new ValidationPipe()) productDto: ProductDto): ResponseData<Product> {
    try {
      return new ResponseData<Product>(this.productService.addProduct(productDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Get('/:id')
  detailProduct(@Param('id') id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(this.productService.getProductDetail(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
}
