import { Body, Controller, Post, Get } from "@nestjs/common";
import { ProductRepository } from "./product.repository";

@Controller('/products')
export class ProductController{
    constructor(private productsRepository: ProductRepository) { }

    @Post()
    async createProduct(@Body() product){
        this.productsRepository.save(product);
    }

    @Get()
    async getProduct(){
        return this.productsRepository.get();
    }

}