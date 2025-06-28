/* хуй его знает как обьяснить, но короче эта тема вылазит типа как в потверждении чего-то на сайте */
alert('Hello, World!');
/* коментарий который добавляется в консоль */
console.log('Собщение в консоль');

/* ---------------------------- */

/*! важно то что бы вывести какое-то изменение нужно прописать сначала 
то что будет выводиться на экран, а потом уже то что изменит уже, пример снизу */

let userName = 'главная часть'; // (let) - это переменная, которая может изменяться
console.log(userName); // изменяем переменную
userName = 1;
console.log(userName); // выводим измененную переменную

/* ---------------------------- */

const constValue = 10; // (const) - это константа, которая не может изменяться

/* ---------------------------- */

/* Типы данных */
//Лапки: какие угодно, но лучше использовать (`)
const stringVar1 = `string`;
const stringVar2 = 'string';
const stringVar3 = 'string';
console.log(stringVar1);

/* числа */

const a = 10; // целое число
console.log(a);
const a2 = 10.5; // дробное число
console.log(a2);

/* булевый тип данных */
const isTrue = true; // истина
const isFalse = false; // ложь
console.log(isTrue);
console.log(isFalse);

/* null нужен, чтобы явно показать: здесь ничего нет */

const selectedProduct = null; // пока ничего не выбрано
console.log(selectedProduct);
// позже пользователь выберет товар
/* selectedProduct = 'Телефон'; */

/* symbol */
const uniqueSymbol = Symbol(); // уникальный идентификатор
console.log(uniqueSymbol);
// его можно использовать для создания уникальных свойств объектов
const anotherSymbol = Symbol('описание');
console.log(anotherSymbol);

/* Объект — это как коробка, в которую можно положить много разных вещей с названиями.
Например, если представить пользователя на сайте, то объект может хранить его имя, возраст, email и т.д.*/
const objValue = {};
console.log(objValue);

///////////////////////////////////////////
/* Отчет типов данных */

/* typeof - это оператор, который показывает тип данных переменной или значения.*/

console.log(`typeof 10:`, typeof 10); // 'number'
console.log(`typeof objectValue:`, typeof objValue); // 'object'
