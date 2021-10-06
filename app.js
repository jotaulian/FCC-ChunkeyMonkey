// FREE CODE CAMP BASIC ALGORITH SCRIPTING JS: CHUNKY MONKEY

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array:

function chunkArrayInGroups(arr, size) {
  // Create Two-Dimensional array:
  let nuevoArr = [];
  
  //Calculate the quantity of small arrays:
  let cantidadArraysitos = Math.ceil(arr.length/size);
  
  // Create and fill each small array:
  for(let i=0; i<(cantidadArraysitos);i++)
  {
    let arraysito = [];
    for(let i=0; i<size;i++)
    {
      arraysito = [...arraysito, arr.shift()];
      // When there is no more elements in the original array we break out of the loop:
      if(arr.length == 0 ) 
      {
        break;
      }
    }
    // Adding each small array inside the two-dimensional array:
    nuevoArr = [...nuevoArr, arraysito];
  }
  
  return nuevoArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);