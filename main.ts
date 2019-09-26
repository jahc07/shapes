export class Rectangle {
    private posX: number;
    private posY: number;
    private height: number;
    private width: number;

    public constructor(px: number, py: number, h: number, w: number) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }
    public setposX(px: number): void {
        this.posX = px;
    }
    public getposX(): number {
        return this.posX;
    }
    public setposY(py: number): void {
        this.posY = py;
    }
    public getposY(): number {
        return this.posY;
    }
    public setheight(h: number): void {
        this.height = h;
    }
    public getheight(): number {
        return this.height;
    }
    public setwidth(w: number): void {
        this.width = w;
    }
    public getwidth(): number {
        return this.width;
    }
    public getArea(): number {
        let area: number = this.height + this.width;
        return area;
    }
    //  public getDesplazar(): number {
    // let desplazar: number = this.width;//
}



let Rectangle1: Rectangle = new Rectangle(7, 5, 3, 7);

Rectangle1.setposX(150)
console.log(Rectangle1);
console.log(Rectangle1.getposX());

export class Squard {
    private posX: number;
    private posY: number;

    public constructor(px, py) {
        this.posX = px;
        this.posY = py;
    }
    public setposX(px: number): void {
        this.posX = px;
    }
    public getposX(): number {
        return this.posX;

    } public setposY(py: number): void {
        this.posY = py;
    }
    public getposY(): number {
        return this.posY;
    }
}
let Squard1: Squard = new Squard(10, 5);
Squard1.setposX(60)
console.log(Squard1);

export class Circle {
    private radio: number;
    contructor(r: number) {
        this.radio = r;
    }
    public setradio(r: number): void {

    }
    public getradio(): number {
        return this.radio;
    }
}
let Circle1: Circle = new Circle();
Circle1.setradio(24)
console.log(Circle1);

export class Sector {
    private angX: number;
    private radY: number;

    public constructor(ax, ry) {
        this.angX = ax;
        this.radY = ry;
    }
    public getangX(): number {
        return this.angX;

    } public setradY(ry: number): void {
        this.radY = ry;
    }
    public getradY(): number {
        return this.radY;
    }
}
let Sector1: Sector = new Sector (12, 34);
Sector1.setradY(40)
console.log(Sector1);

export class banco{
    private ingresoX: number;
    private retiroX: number;
    private saldoX: number;
    
    public constructor(in: number, re: number, sa: number){
        this.ingresoX = in;
        this.retiroX = re;
        this.saldoX = sa;
    }
} 




