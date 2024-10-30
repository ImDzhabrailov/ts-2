    //Array (массив):

//1. Массив чисел от 1 до 5:
    const numbers: number[] = [1, 2, 3, 4, 5];
    //Это массив чисел (number[]).

//2. Массив строк с названиями фруктов:
    const favoriteFruits: string[] = ["яблоко", "банан", "апельсин"];
    //Это массив строк (string[]).

//3. Массив с числами, строками и булевым значением:
    const mixedArray: (number | string | boolean)[] = [1, "два", true];
    //Это массив, содержащий числа, строки и булевые значения ((number | string | boolean)[]).

    //Tuple (кортеж):
//1. Кортеж из трех элементов:
    const personInfo: [string, string, number] = ["Иван", "Иванов", 25];

//2. Кортеж с любимыми цветами:
    const favoriteColors: [string, string, string] = ["синий", "зеленый", "красный"];

    //Never:

//1. Функция, которая никогда не завершается:
    function infiniteLoop(): never {
        while (true) {}
    }

//2. Попытка присвоить переменной типа never значение:
    let neverValue: never;
    neverValue = 123; // Ошибка: Type 'number' is not assignable to type 'never'.

//3. Функция, которая выбрасывает ошибку:
    function throwError(): never {
        throw new Error("Ошибка!");
    }

    //Object:

//1. Объект о любимой книге:
    const favoriteBook = {
        title: "Princess of Mars",
        author: "Эдгар Райс Берроуз",
        year: 1912
    };

//2. Объект с информацией о вас:
    const myInfo = {
        firstName: "Марк",
        lastName: "Дакаскос",
        age: 25
    };

//3. Функция, принимающая объект и ничего не возвращающая:
    function logBookInfo(book: { title: string; author: string }): void {
        console.log(Книга: ${book.title}, Автор: ${book.author});
    }

//Any:

//1. Переменная типа any:
    let favoriteColor: any = "зеленый";

//2. Список с элементами разных типов данных:
    const mixedList: any[] = ["строка", 42, { key: "value" }, true];

//3. Функция, принимающая переменную типа any и ничего не возвращающает:
    function processAny(value: any): void {
        console.log(value);
    }

//Type:

//1. Тип Person:
    type Person = {
        name: string;
        age: number;
    };

//2. Тип Product:
    type Product = {
        name: string;
        price: number;
        inStock: boolean;
    };

//3. Тип User:
    type User = {
        id: number;
        username: string;
        email: string;
    };

//4. Тип Account:
    type Account = {
        id: number;
        balance: number;
    };

