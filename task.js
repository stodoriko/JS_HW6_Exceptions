"use strict";

//Задание 1

function parseCount(value) {
    let parseResult = Number.parseInt(value); 
    if (isNaN(parseResult)) {
        const divideError = new Error("Невалидное значение");
        throw divideError;
    }
    return parseResult;
}

function  validateCount(valueTwo) {
    try {
        return parseCount(valueTwo);
    } catch (e) {
        return e;
    }
}

//Задание 2
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
    }
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch (e) {
        return {
            getArea(){
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter(){
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}