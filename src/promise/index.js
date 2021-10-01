const someThingsWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey! Está correcto");
    } else {
      reject("Upssss!");
    }
  });
};

someThingsWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const someThingsWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whoopsss");
      reject(error);
    }
  });
};

someThingsWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err, "pasó un error"));

Promise.all([someThingsWillHappen(), someThingsWillHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((err) => {
    console.error(err);
  });
