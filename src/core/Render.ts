import { Color } from "./Colors";

export class Render {
    private context : CanvasRenderingContext2D;

    constructor (canvas: HTMLCanvasElement) {
        this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
    }

    public drawPixel(x: number, y: number, color: Color=Color.BLACK) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, 1, 1);
    }
}