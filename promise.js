const { readFile } = require("fs/promises");
// const { promisify } = require("util");

// const readFilePromise = promisify(readFile);

// function getText(pathFile) {
//   return new Promise((resolve, reject) => {
//     readFile(pathFile, "utf-8", (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// }

async function read() {
  try {
    const result = await readFile("./data/message.txt", "utf-8");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

read();
