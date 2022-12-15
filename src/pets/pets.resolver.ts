import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Pet } from 'src/pets/pet.entity';
import { createPetInput } from './dto/create-pet.input';
import { PetsService } from './pets.service';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petService: PetsService) {}

    @Query(returns => Pet)
    getPet(@Args('id', { type: () => Int }) id :number): Promise<Pet> {
        return this.petService.findOne(id)
    }

    @Query(returns => [Pet])
    pets(): Promise<Pet[]> {
        return this.petService.findAll()
    }

    @Mutation(returns => Pet)
    createPet(@Args('createPetInput') createPetInput: createPetInput): Promise<Pet> {
        return this.petService.createPet(createPetInput)
    }
}
