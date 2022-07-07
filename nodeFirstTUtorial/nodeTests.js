const fs = require("fs");

// fs.mkdirSync('testDir')

// console.log(process.argv)

// console.log(module)

// console.log(__dirname, __filename)

// console.log(process.cwd())

// const os = require("os");

// const currOsDeets = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(currOsDeets)

const folderName = process.argv[2] || "randomName"
const fileNames = ['index.html', 'main.js', 'styles.css']
const data= ['!', 'console.log("hello world")', '*{}']
try {
    fs.mkdirSync(folderName);
    
    for(i = 0; i < 3; i++){
        fs.writeFileSync(`${folderName}/${fileNames[i]}`, `${data[i]}`)
    }
} catch(err){
    console.log("Here's what went wrong")
    console.log(err)
    return
}