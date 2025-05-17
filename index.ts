class Box {
    // Оператор ! (восклицания) убирает предупреждение от конструктора
    // width!: number;

    // Второй вариант глобальный, нужно поставить в false параметр strictPropertyInitialization (ts.config.json)

    // Передаём свойства в класс
    width: number; // Тип данных свойства width = number
    height: number = 500; // Тип данных свойства height = number с начальным значением 500
    volume: number | undefined; // Тип данных свойства volume = number | undefined
    _content: string | undefined; // Тип данных свойства content = string | undefined

    // Конструктор с аргументами (volume?, content? - необязательны)
    constructor(width: number, volume?: number, content?: string) {
        // super();
        // Передаём значение width, height, volume, content
        this.width = width;
        this.volume = volume;
        this._content = content;
        this.height;
    }

    // Метод для рассчета объёма
    calculateVolume(): void {
        // Условие
        if (!this.volume) {
            // Вычисляем значение ширина * на высоту
            this.volume = this.width * this.height;
            // Вывод в консоль
            console.log(`Объём посылки: ${this.volume}`);
        } else {
            console.log(`Объём посылки: ${this.volume}`);
        }
    }

    // Несколько вариантов значений для метода checkBoxSize (overloading)
    checkBoxSize(transport: number): string;
    checkBoxSize(transport: number[]): string;
    // Метод для проверки размера посылки
    checkBoxSize(transport: number | number[]): string {
        // Условие
        if (typeof transport === "number") {
            // Проверяем размер ширины бокса (если размер транспорта больше либо равен ширине бокса) выводи "Ok" в плохом случае "Not ok"
            return transport >= this.width ? "Ok" : "Not ok";
        } else {
            // Если хотя бы один транспорт подходит по размеру для бокса то выводим "Ok" в плохом случае "Not ok"
            return transport.some((t) => t >= this.width) ? "Ok" : "Not ok";
        }
    }

    // Ассинхронная функция
    async content(value: string) {
        const date = await new Date().toTimeString();
        this._content = `Date: ${date}, Content: ${value}`;
        // Вывод в консоль
        console.log(this._content);
        // return this._content;
    }
}

// Экземпляр класса
const firstBox = new Box(250);
// Устанавливаем значение для объёма
firstBox.volume = 50000;

// Вывод в консоль
// OK
console.log(firstBox.checkBoxSize([200, 500]));
// Not ok
// console.log(firstBox.checkBoxSize(240));
// OK
// console.log(firstBox.checkBoxSize(270));

// console.log((firstBox.content = "Test")); // Устанавливаем значение "Test"
// console.log(firstBox.content); // Обращаемся к свойству для получения содержимого экземпляра content

class PresentBox extends Box {
    wrap: string;
    height: number = 600; // присваиваем значение в 600

    constructor(wrap: string, width: number) {
        // super() для наследования свойств родительского класса
        super(width);
        this.wrap = wrap;
    }

    // Ассинхронная функция
    // Переписываем старый метод с помощью override
    override async content(value: string, text?: string) {
        const date = await new Date().toTimeString();

        // Условие
        if (!text) {
            // Если текста нету, берём значение из родительского класса
            super.content(value);
        } else {
            // Иначе вызываем эту строку
            this._content = `Date: ${date}, Content: ${value}, Text: ${
                text ? text : "No text"
            }`;
        }

        // Вывод в консоль
        console.log(this._content);
        // return this._content;
    }
}

// Новый экземпляр класса
new PresentBox("red", 500).content("TV", "Gift");

// tsc index.ts (команда в терминале для запуска компилятора ts кода)
// tsc -help (команда в терминале для помощи с настройками)
// ts-node index.ts (команда для запуска ноды + ts файл -- удобно для быстрого вывода в консоль)
