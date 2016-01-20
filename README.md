# What is this ?
Repository with educational files while working on online book by learn.javascript.ru


##Short Reminders
#### Переменные
* Константы используют вместо строк и цифр, чтобы сделать программу понятнее и избежать ошибок.
* Для названия переменных принято использовать camelCase

### alret, confirm, prompt

##### alert 
* выводит сообщение.

##### prompt
* выводит сообщение и ждёт, пока пользователь введёт текст, а затем возвращает введённое значение или null, если ввод отменён (CANCEL/Esc).
* Вызов prompt возвращает то, что ввёл посетитель – строку или специальное значение null, если ввод отменён.
* Всегда указывайте default  
```javascript 
  var test = prompt("Тест", '');
```
##### confirm 
* выводит сообщение и ждёт, пока пользователь нажмёт «OK» или «CANCEL» и возвращает true/false.


#### Логические операторы

###### || 
* вычисляет операнды слева направо до первого «истинного» и возвращает его, а если все ложные – то последнее значение.
* запинается на «правде»
 
##### &&
* вычисляет операнды слева направо до первого «ложного» и возвращает его, а если все истинные – то последнее значение
* запинается на «лжи»
* приоритет у && больше, чем у || т.е. && выполняется раньше


#### Преобразование типов для примитивов
* + перед строкой преобразовывает ее в число
```javascript
  var a = +"123"; // 123
```

#### Циклы
* Директива continue прекращает выполнение текущей итерации цикла. Цикл ниже использует continue, чтобы не выводить чётные значения:
```javascript
for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  alert(i);
}
```
#### Функции
* Передаваемые значения копируются в параметры функции и становятся локальными переменными.
* Параметры функции копируются в её локальные переменные.
* Можно объявить новые локальные переменые при помощи var.
* Значение возвращается оператором return ....
* Вызов return тут же прекращает функцию.
* Если return; вызван без значения, или функция завершилась без return, то её результат равен undefined.

###### При обращении к необъявленной переменной функция будет искать внешнюю переменную с таким именем, но лучше, если функция использует только локальные переменные:

* Это делает очевидным общий поток выполнения – что передаётся в функцию и какой получаем результат.
* Это предотвращает возможные конфликты доступа, когда две функции, возможно написанные в разное время или разными людьми, неожиданно друг для друга меняют одну и ту же внешнюю переменную.

###### Именование функций:
* Имя функции должно понятно и чётко отражать, что она делает. Увидев её вызов в коде, вы должны тут же понимать, что она делает: функции, которые начинаются с "show" – что-то показывают showMessage(..), функции, начинающиеся с "get" – получают.
* Функция – это действие, поэтому для имён функций, как правило, используются глаголы.
* Функции являются основными строительными блоками скриптов. Мы будем неоднократно возвращаться к ним и изучать все более и более глубоко.


###### Функциональные выражения
* Обычные значения, такие как числа или строки, представляют собой данные. А функцию можно воспринимать как действие. Это действие можно запустить через скобки (), а можно и скопировать в другую переменную.
```javascript
function sayHi() {   // Function Declaration
  alert( "Привет" );
}
var func = sayHi;   
func(); // Привет   
```

* функция – это всего лишь разновидность значения переменной
```javascript
var sayHi = function(person) { // Function Expression
  alert( "Привет, " + person );
};
sayHi('Вася');
```

* Основное отличие между ними: функции, объявленные как Function Declaration (которые без var), создаются интерпретатором до выполнения кода.

* Function Declaration при use strict видны только внутри блока, в котором объявлены
```javascript
if (age >= 18) {
  function sayHi() {
    alert( 'Прошу вас!' );
  }
}
sayHi(); // выдаст ошибку - ф-ция невидна
```
* Функциональное выражение, которое не записывается в переменную, называют анонимной функцией
* Используйте Function Expression только там, где это действительно нужно и удобно 
