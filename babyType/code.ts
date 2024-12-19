export const box = () =>{
    class Poins{
        x: number = 0
        y: number = 0
        readonly vertion: string = '100'

        constructor(x: number, y: number){
            this.x = x
            this.y = y
            console.log(this.y)
        }
    }
    const poins = new Poins(10,30);
    // poins.x = 20;
    console.log(poins);


    class Box {
        private _x: number = 0
        get x(): number {
            this._x = this._x + 1;
            return this._x
        }
        set x(value: number) {
            this._x = value
        }
    }

    const box = new Box();
    console.log(box.x);
    console.log(box.x);
    console.log(box.x);
    console.log(box);


    class Hello{
        name: string = ""

        constructor(name: string) {
            this.name = name
        }

        sayHi() {
            console.log(`Hi' I am ${this.name}`)
        }
    }

    const hello = new Hello('Thanaphon')
    hello.sayHi()
}