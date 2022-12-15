import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from 'src/pets/pet.entity';
import { Repository } from 'typeorm';
import { createPetInput } from './dto/create-pet.input';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}

  createPet(createPetInput: createPetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);

    return this.petsRepository.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }

  findOne(id: number): Promise<Pet> {
    return this.petsRepository.findOne({
      where: {
         id
      },
    });
  }
}
