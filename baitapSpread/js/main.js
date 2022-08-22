let str = document.querySelector('.heading').innerHTML
let char = [...str]

console.log(char)

let renderSpan = (str) =>{
    let output = ''
    for(let i = 0; i < str.length ;i++ ){
        output += `
        <span>${str[i]} </span>

        `
    }
    document.querySelector('.heading').innerHTML = output
}
renderSpan(char)