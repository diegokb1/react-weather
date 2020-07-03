function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number' ) {
      resolve(a + b);
    } else {
      reject('Type Mismatch');
    }
  })
}

addPromise(1, 'dsd2').then(result => {
  console.log(result)
}, err => {
  console.log(err)
})
