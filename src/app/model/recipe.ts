export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {

    /*You can also build the constructor directly like this:

    constructor(public title: string,
                public description: string,
                public ingredients: Ingredient[],
                public instructions: Instruction[],
                public cover_photo: string) {}

    and this can take the place of declaring variables and constructor, like below*/

    public title: string;
    public description: string;
    public ingredients: Ingredient [];
    public instructions: Instruction [];
    public cover_photos: string;

    constructor(t: string, d: string, ing: Ingredient[], ins: Instruction[], cp:string){
        this.title = t;
        this.description = d;
        this.ingredients = ing;
        this.instructions = ins;
        this.cover_photos = cp;
    }
}