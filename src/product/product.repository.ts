import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {
    private users = []

    async save(product){
        this.users.push(product);
    }

    async get() {
        return this.users;
    }

}