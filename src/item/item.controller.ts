import { Controller, Get, Body, Post, ValidationPipe } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDTO } from './item.dto';
import { User } from '../user.decorator';
import { transform } from '@babel/core';

@Controller('item')
export class ItemController {
    constructor(private serv: ItemService){ }
    
    @Get()
    public async getAll(){
        return await this.serv.getAll();
    }
    
    @Post()
    public async post(@User() user: User, @Body()  dto: ItemDTO): Promise<ItemDTO> {
         return this.serv.create(user,ItemDTO.from(dto),);
    }
}
