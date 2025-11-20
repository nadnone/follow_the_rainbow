import { CENTER, FACTOR } from './constants.js'

export class Circle {

  #x;
  #y;
  #r;
  #color;
  #title;
  #body;
  #svg;

  constructor(title, color, x, y, r, world) {
    this.#x = x;
    this.#y = y;
    this.#r = r / FACTOR;
    this.#title = title;
    this.#color = color;
    this.#body = document.body;
    this.draw(CENTER.x + x/FACTOR, CENTER.y + y/FACTOR)
    this.world = world

    let svg = document.querySelector("svg");
    svg.setAttribute("width", this.#r)
    svg.setAttribute("height", this.#r)


  }

  draw(x = this.#x, y = this.#y) {

    let circle = document.createElement("circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", this.#r);
    circle.setAttribute("stroke", this.#color)
    circle.setAttribute("fill", "#ffffff00")
    circle.setAttribute("stroke-width", 10)
    circle.setAttribute("title", this.#title)

    let base = document.createElement("circle");
    base.setAttribute("cx", x);
    base.setAttribute("cy", y);
    base.setAttribute("r", this.#r / 2);
    base.setAttribute("fill", this.#color)
    base.setAttribute("title", this.#title)


    let svg = document.querySelector('.graph')
    svg.appendChild(circle);
    svg.appendChild(base);
    this.#body.appendChild(svg);

    this.#body.innerHTML += "";
  }


}
