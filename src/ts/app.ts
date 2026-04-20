import Cart from './service/Cart';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();

// Добавляем фильм (Задание 1)
const avengers = new Movie(1, 'Мстители', 500, 2012, 'США', 'Assemble!', 'экшен', '137 мин.');
cart.add(avengers);
cart.add(avengers); // Пытаемся добавить второй раз (не добавится, т.к. canCount = false)

// Добавляем смартфоны (Задание 3 - со звёздочкой)
const iphone = new Smartphone(2, 'iPhone 15', 1000);
cart.add(iphone);
cart.add(iphone); // Добавится второй экземпляр, так как это гаджет

console.log('Список товаров в корзине:', cart.items);

// Проверяем расчет стоимости (Задание 2)
console.log('Общая стоимость:', cart.getTotalPrice()); // Должно быть 2500 (500 + 1000 + 1000)
console.log('Стоимость со скидкой 10%:', cart.getTotalPriceWithDiscount(10)); // 2250

// Проверяем удаление
cart.removeById(1);
console.log('После удаления Мстителей:', cart.items);
