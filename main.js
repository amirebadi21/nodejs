// datta types
// 1-Number
// 2-String
// 3-Boilea (True, False)
// 4-Object
// 5-Null
// 6-Undefinde
// 7-Bigint
// 8-Symbol


//Control flow: 
// conditons, loops, functions
console.clear()
// let x = 20
// if(x > 10)
// {
//     console.log('b10')
// }
// else if(x > 8)
// {
//     console.log("b8")
// }
// else if (x > 4)
// {
//     console.log("b4")
// }
// else
// {
//     console.log("small")
// }

// let l = [1, 'hiiiii', true, [1,2]]

// let obj = { 
//     hi: 10, 
//     bye: 20,
//     ok: 50,
// }

// for(let [k , v] of Object.entries(obj)){
//     console.log(`${k}: ${v}`)
// }

const fs = require('fs');

// let data = fs.readFileSync(`${__dirname}\\data.txt`, 'utf8')
// console.log(data)

try {
    let s = fs.readFileSync("./data.json", "utf8")
    let obj = JSON.parse(s)
    console.log(obj.amir.name)
}
catch(e) {
    console.log("There is an Error\n"+ e)
}

// fs.writeFileSync("C:\\Users\\amire\\Desktop\\nodejs\\data.txt","amiiiiirrrrrrrr")

// console.log(data)