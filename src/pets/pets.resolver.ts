import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Pet } from 'src/pets/pet.entity';
import { createPetInput } from './dto/create-pet.input';
import { PetsService } from './pets.service';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petService: PetsService) {}

    @Query(returns => [Pet])
    pets(): Promise<Pet[]> {
        return this.petService.findAll()
    }

    @Mutation(returns => Pet)
    createPet(@Args('createPetInput') createPetInput: createPetInput): Promise<Pet> {
        return this.petService.createPet(createPetInput)
    }
}
