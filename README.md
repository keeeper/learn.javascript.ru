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
