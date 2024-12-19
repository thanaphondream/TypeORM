//
let username: unknown
username = 'Thanphon';
let h = (username as string ).toUpperCase()
let g = (<String>username).toUpperCase()

console.log(`Number1: ${h}, Number2: ${g}`)

//เช็คtypesชนิดของข้อมูล
if(typeof g === "string"){
    console.log("Type This String")
}else{
    console.log("Type This not String")
}

//if else 

const  number: number = 50
let resule: string 

// if( number % 2 ==0 ){
//     resule = "เลขคู่"
// }else{
//     resule = "เลขคี่"
// }

resule = (number % 2 ==0) ? "เลขคู่": "เลขคี่"
console.log(resule)

let service: number = 1
let resule1: string

switch(service){
    case 1:
        resule1 = '01'
        console.log(resule1)
        break
    case 2:
        resule1 = '02'
        break
    case 3:
        resule = '03'
        break
    default:
        resule1 = '00'
        break
}

const end: string[] = ["A", "B", "C"]

for(let i=0; i<end.length; i++){
    console.log(end[i])
}

end.forEach((E) => {
    console.log(E)
})

const sayHi = (name: string): void => {
    console.log("Hello", name)
}

sayHi("Thanaphon")
sayHi("JoJo")

const getNumber = (): number => {
    return 400
}

const getString = (): string => {
    return 'na'
}

console.log(getNumber(), getString())

const amo = (nu: number): string => {
    if(nu % 2 ==0){
        return "A"
    }else{
        return "B"
    }
}

const nb = (nu1: number, nu2: number): number => {
    return nu1 + nu2
}

console.log(amo(1))
console.log(nb(100, 200))

const adddess = (st1: string, st2: string, st3: string = "C") =>{
    console.log(`1: ${st1}, 2: ${st2}, 3: ${st3}`)
}

adddess('A', 'B', 'D')
adddess('A', 'B')

const pr = {
    name01:"Thanaphon",
    age01: 23
}

const objectFn = (data: {name01: string, age01: number}): void => {
    console.log(`Nmae: ${data.name01} Age: ${data.age01}`)
}

objectFn(pr)

// const pos: {lat: number, logs: number} = {lat: 10, logs: 20}

const randogs = (): {lat: number, logs: number} => {
    return {
        lat:  Math.random(),
        logs: Math.random()
    }
}

console.log(randogs())


const Fnvoin = (data1: {name02: string, age02: number}) => {
    return data1.name02 +  data1.age02
}

console.log(Fnvoin({name02:'Thanaphon',age02: 23}))


type Employee = {
    readonly id : number,
    Name: string,
    salary: number,
    phon?: string
}

let emp1: Employee = {id: 1, Name: 'Thanphon', salary: 1000000, phon: "064-xxx-xx85"}
// emp1.id = 6
emp1.Name = 'Thanphon YanThisan'
emp1.salary = 500000
emp1.phon = '0647641385'
console.log(emp1)

let emp2: Employee = {id: 2, Name: 'somsan', salary: 1000000, phon: "064-xxx-xxxx"}
console.log(emp2)

const emp3: Employee = { id: 3, Name: 'bobi', salary: 200000}
console.log(emp3)


const users: string[] = ["lufy"]
users.push("nami")
users.push('sanji')
console.log(users)

let emp4: Employee[] = []
emp4.push({id: 5, Name: "NPC", salary: 14000})
emp4.push({id: 6, Name: 'bbn', salary: 12000})
console.log(emp4[0].Name)


// const total = (a: string, b: string): string => {
//     return ( parseInt(a) + parseInt(b)).toString()
// }

// console.log(total("200", "100"))

function total(a: number, b: number) : number
function total(a: string, b: string) : string
function total(a: unknown, b: unknown) : unknown{
    if(typeof a == 'number' && typeof b == 'number'){
        return a+b
    }
    else if(typeof a == 'string' && typeof b == 'string'){
        return parseInt(a) + parseInt(b)
    }
    throw new Error("เกิดข้อผิดพลาด")
}

console.log(total(100, 200))
console.log(total("100", "200"))


const onepice01: string[] = ['lufy', 'solo', 'nami']
const onepice02: string[] = ['uso', 'sanja']
onepice01.push(...onepice02)
console.log(onepice01)


const talol01 = (...number: number[]) => {
    return number.reduce((re, va) => {
        return re + va
    }, 0)
}

console.log(talol01(100, 200))
console.log(talol01(100, 200, 300))
console.log(talol01(100, 200, 300, 400))


type status = [number, string]

const goodStatus: [code: number, status: string] = [200, "GoodApi"]
const notStatus: status = [400, "notGoodApi"]
console.log(goodStatus)
console.log(notStatus)

import { box } from "./code";

box()
