// const { writeFile } = require('fs/promises')

// createBigFile = async () => {
//   await writeFile('./data/bigfile.txt', 'hello world')
// }

// createBigFile()

const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigfile.txt', 'utf-8')

stream.on('data', chunk => {
  console.log(chunk);
})

stream.on('end', () => {
  console.log('Ya termine de leer el archivo');
})

stream.on('error', error => {
  console.log(error);
})
