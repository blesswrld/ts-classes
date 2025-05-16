"use strict";
class Box {
    // Оператор ! (восклицания) убирает предупреждение от конструктора
    // width!: number;
    // Второй вариант глобальный, нужно поставить в false параметр strictPropertyInitialization (ts.config.json)
    // Передаём свойства в класс
    width;
    height;
    constructor(width) {
        // Передаём значение width, height
        this.width = width;
        this.height = 500;
    }
}
// Экземпляр класса
const firstBox = new Box(250);
console.log(firstBox);
// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
