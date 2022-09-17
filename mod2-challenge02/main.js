//PROMESAS ---------------------------------
console.log("antes de promesa...");
let promise = new Promise(function (resolve, reject) {  
  setTimeout(() => resolve(), 5000);
}).then((resp) => {
  console.log("termino timeout...");
});
console.log("despues de promesa...");
