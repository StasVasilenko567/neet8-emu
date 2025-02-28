import { Render } from "./Render";

export class System {
    private render: Render;
    

    constructor (ren: Render) {
        this.render = ren;
    }
}