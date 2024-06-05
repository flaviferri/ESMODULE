
// Exportado usando "exports"

export const add =(x,y)=>{
  return x+y
}

const subtract =(x,y) =>{
  return x-y
}
export {subtract}

// Exportando usando "default export"

const multiply =(x,y) =>{
  return x*y
}
export default multiply


console.log('Add: ', add(5, 3)); //  Add:  8
console.log('Subtract: ', subtract(5, 3)); //  Subtract:  2
console.log('Multiply: ', multiply(5, 3)); // Multiply:  15