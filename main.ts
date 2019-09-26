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
}
let Rectangle1: Rectangle = new Rectangle(7, 5, 3, 7);

Rectangle1.setposX (150)
console.log(Rectangle1.getposX());
console.log(Rectangle1);

