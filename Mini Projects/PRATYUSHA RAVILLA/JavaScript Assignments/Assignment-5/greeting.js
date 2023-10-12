// Function to create a promise that greets a person after 3 seconds
function greetPerson(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name) {
          resolve(`Hello, ${name}!`);
        } else {
          reject(new Error('Name not provided.'));
        }
      }, 3000);
    });
  }
  
  // Usage of promises with different Promise API methods
  const promise1 = greetPerson('Alice');
  const promise2 = greetPerson('Bob');
  const promise3 = greetPerson();
  
  // Using Promise.all
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log('Using Promise.all:');
      console.log(results);
    })
    .catch((error) => {
      console.error('Error with Promise.all:', error);
    });
  
  // Using Promise.any (Note: This method requires a modern browser that supports it)
  Promise.any([promise1, promise2, promise3])
    .then((result) => {
      console.log('Using Promise.any:');
      console.log(result);
    })
    .catch((error) => {
      console.error('Error with Promise.any:', error);
    });
  
  // Using Promise.allSettled
  Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
      console.log('Using Promise.allSettled:');
      console.log(results);
    });
  
  // Using Promise.race
  Promise.race([promise1, promise2, promise3])
    .then((result) => {
      console.log('Using Promise.race:');
      console.log(result);
    });
  