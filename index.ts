class Box {
    // Оператор ! (восклицания) убирает предупреждение от конструктора
    // width!: number;
    // Второй вариант глобальный, нужно поставить в false параметр strictPropertyInitialization (ts.config.json)
    // Передаём свойства в класс
    width: number;
    height: number;

    constructor(width: number) {
        // Передаём значение width, height
        this.width = width;
        this.height = 500;
    }
}

// Экземпляр класса
const firstBox = new Box(250);
// Вывод в консоль
console.log(firstBox);

class User {
    name: string;
}

// Создаём нового пользователя
const Tamerlan = new User();
// Устанавливаем имя для пользователя
Tamerlan.name = "Tamerlan";
// Вывод в консоль
console.log(Tamerlan);

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
