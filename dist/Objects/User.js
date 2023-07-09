"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    //basic user class with name, age, password, and recipe list and associated getters and setters
    constructor(name, age, password, recipe_list) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.recipe_list = recipe_list;
    }
    setname(name) {
        this.name = name;
    }
    getname() {
        return this.name;
    }
    setage(age) {
        this.age = age;
    }
    getage() {
        return this.age;
    }
    setpassword(password) {
        this.password = password;
    }
    getpassword() {
        return this.password;
    }
    getrecipe_list() {
        return this.recipe_list;
    }
    setrecipe_list(recipe_list) {
        this.recipe_list = recipe_list;
    }
}
exports.User = User;
