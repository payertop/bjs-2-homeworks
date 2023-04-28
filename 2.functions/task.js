  //Задача 1
  function getArrayParams(...arr) {

    let min = arr[0];
    let max = arr[0];
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++){
      if (max < arr[i]){
        max = arr[i];
      }else if (min > arr[i]){
        min = arr[i];
      }
      sum += arr[i];
    }
  
    avg = sum / arr.length;
  
  
    return { min: min, max: max, avg: +avg.toFixed(2) };
  }
  
  //Задача 2
  function summElementsWorker(...arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  
  }
  
  function differenceMaxMinWorker(...arr) {
    if (summElementsWorker(...arr) == 0 || isNaN(summElementsWorker(...arr))) {
      return 0;
    }
    max = Math.max(...arr);
    min = Math.min(...arr);
  
    return max - min;
  
  }
  
  function differenceEvenOddWorker(...arr) {
    if (summElementsWorker(...arr) == 0 || isNaN(summElementsWorker(...arr))) {
      return 0;}
    let sumEvenElement = 0;
    let sumOddElement = 0;
    
    for(let i = 0; i < arr.length; i++){
      const temp = arr[i];
      if(temp % 2 == 0){
        sumEvenElement += temp;
      }else{
        sumOddElement += temp;
      }
    }
    return sumEvenElement - sumOddElement;
  
  }
  
  function averageEvenElementsWorker(...arr) {
    if (summElementsWorker(...arr) == 0 || isNaN(summElementsWorker(...arr))) {
      return 0;}
    
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++){
    let tmp = arr[i];
    if(tmp % 2 == 0){
      sumEvenElement += tmp;
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
  }
  
  //Задача 3
  function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
      const element = arrOfArr[i];
      const result = func(...element);
      if (result > maxWorkerResult) {
        maxWorkerResult = result
      }
    }
    return maxWorkerResult;
  
  }