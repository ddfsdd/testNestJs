import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../model/item.entity';
import { ItemDTO } from './item.dto';
import { User } from '../user.decorator';

@Injectable()
export class ItemService {
    constructor(@InjectRepository(Item) private readonly repo: Repository<Item>){}

    public async getAll(){
        return await this.repo.find();
    }
    public async create(user: User, dto: ItemDTO): Promise<ItemDTO> {
        //console.log(user);
        return this.repo.save(dto.toEntity(user))
          .then(e => ItemDTO.fromEntity(e));
      }
}
