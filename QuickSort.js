/* Определим переменную для значений*/
const values = [2, 27, 14, 52, 31, 96, 73, 47, 22, 6];

/* Объявляем функцию
  QuickSort принимает один параметр List
  Далее проверяем длину списка:
  Если 1, то возвращаем список как есть.
  */
function QuickSort(List) {
   if (List.length <= 1) {
       return List;
   }
/* Добавляем опорные значения */
   const pivot = List[List.length - 1];
   const leftList = [];
   const rightList = [];

/* Если значение меньше или равно опорному, 
    то хранится в leftList
    Если значение больше опорного, 
    то хранится в RighttList
*/
   for (let i = 0; i < List.length - 1; i++) {
       if (List[i] < pivot) {
           leftList.push(List[i]);
       }
       else {
           rightList.push(List[i])
       }
   }
/* Вызываем функцию с помощью Оператора расширения
*/
   return [...QuickSort(leftList), pivot, ...QuickSort(rightList)];
}

console.log(QuickSort(values));
