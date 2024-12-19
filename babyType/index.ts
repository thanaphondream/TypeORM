
const Longin = (Name: string, Age: Number, Email: string) => {
    return `ชื่อ: ${Name} อายุ: ${Age} อีเมล: ${Email}`
}

let Name: string = "Thanaphon"
let Age: number = 23
let Email: any = "Vogikgiy.@amail.com"

const login: any = Longin(Name, Age, Email)
console.log(login)

const box: any = {name: "Thanaphon", age: 23, email: "voigkgky.@gmail.com"}

let ourTuple: [number, boolean, string]

ourTuple = [23, true, "Dream"]

const [ n, b, s] = ourTuple

console.log(box, ourTuple, n)


//Object Types

const phon: {bane: string, phon_name: string, year: number, out: boolean} = {
    bane: "iphon",
    phon_name: "iphon 16 pro", 
    year: 2024,
    out: true
}

console.log(phon)