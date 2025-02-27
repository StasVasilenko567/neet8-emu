import * as lua from 'lua-in-js';
import { Color } from './Colors';
import { Render } from './Render';

export class System {
    
    private env: any;
    private render: Render;

    constructor(render: Render) {
        this.env = lua.createEnv({
            // fileExists: ,
            // loadFile: (path: string) => 
        });
        this.render = render;
        const drawPixel = new lua.Table({ drawPixel: this.drawPixel });
        this.env.loadLib('_G', drawPixel);
    }

    public run() {
        this.env.parseFile("card/main.lua");
    }

    private drawPixel(x: number, y: number, color: Color = Color.BLACK) {
        this.render.drawPixel(x, y, color);
    }
}