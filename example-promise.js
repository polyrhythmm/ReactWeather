function addPromise(a,b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number')
    {
      resolve(a + b);
    } else {
      reject('There is a string involved');
    }
  });
}

addPromise(10, 20).then(function(number) {
  console.log(number + ' is the result');
}, function(error){
  console.log(error);
});


addPromise('b', 10).then(function(number) {
  console.log(number + ' is the result');
}, function(error){
  console.log(error);
});
