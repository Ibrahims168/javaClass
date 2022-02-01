

// let f = 1.8 * c + 32;
// console.log(f);



// let num = 0
// let isOdd = num % 2 
// let result = ''

// if (isOdd){
//     result = `${num} sandwiche`
// } else {
//     result = `${num} sandwiches`
// }
// console.log(result) 


let mark = "hello"
let result = ''

if (typeof(mark)==`number` ){    
    if (mark >= 90){
    result = 'excelent'
    } else if (mark >=80) {
    result = 'very good'
    } else if (mark >= 70) {
    result = 'good'
    } else if (mark >= 60) {
    result = 'fair'
    } else if (mark < 60) {
    result = 'failed'
    }
} else {
    result = 'please enter a valid number'
}
console.log(result)

