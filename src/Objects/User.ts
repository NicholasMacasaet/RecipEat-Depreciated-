import { recipe } from "./recipe";

export abstract class User{

    //basic user class with name, age, password, and recipe list and associated getters and setters
    constructor(
        private name: string,
        private age: number,
        private password: string,
        private recipe_list: recipe[],
    ){}
    
    setname(name: string): void{
        this.name = name;
    }
    getname(): string{
        return this.name;
    }
    setage(age: number): void{
        this.age = age;
    }
    getage(): number{
        return this.age;
    }
    setpassword(password: string): void{
        this.password = password;
    }
    getpassword(): string{
        return this.password;
    }
    getrecipe_list(): recipe[]{
        return this.recipe_list;
    }
    setrecipe_list(recipe_list: recipe[]): void{
        this.recipe_list = recipe_list;
    }
}