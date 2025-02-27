import { Render } from './core/Render';
import { System } from './core/System';
import './style.css'

const canvas = document.getElementById("main-window") as HTMLCanvasElement;

const render = new Render(canvas);

const sys = new System(render);
sys.run();