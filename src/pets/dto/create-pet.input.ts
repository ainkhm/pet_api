import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createPetInput {

    @Field()
    name: string;

    @Field({nullable: true})
    type?: string;
}