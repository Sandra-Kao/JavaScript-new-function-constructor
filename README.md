# JavaScript-new-function-constructor

Please see Codepen:　https://codepen.io/K-SY/pen/VwPqpQm


- Use a "new" before Function() 

  means create a empty object {} and "this" in Function() will point to the empty Object {}

- When useing the Function.prototype to create an object {}

  javascript create the only one object in memory, 
  
  no matter how many var Fu = Function(); was copyed.
  
  It's better then create an object in Function itself.
