import { recipe } from "./recipe";

export abstract class User{

    //basic user class with name, age, password, and recipe list and associated getters and setters
    constructor(
        private name: string,
        private age: number,
        private password: string,
        private recipe_list: recipe[],
    ){}
    
    public setname(name: string): void{
        this.name = name;
    }
    public getname(): string{
        return this.name;
    }
    public setage(age: number): void{
        this.age = age;
    }
    public getage(): number{
        return this.age;
    }
    public setpassword(password: string): void{
        this.password = password;
    }
    public getpassword(): string{
        return this.password;
    }
    public getrecipe_list(): recipe[]{
        return this.recipe_list;
    }
    public setrecipe_list(recipe_list: recipe[]): void{
        this.recipe_list = recipe_list;
    }
    public addrecipe(recipe: recipe): void{
        this.recipe_list.push(recipe);
    }
    public deleterecipe(recipe: recipe): void{
        this.recipe_list.splice(this.recipe_list.indexOf(recipe), 1);
    }
}