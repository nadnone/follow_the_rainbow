import { CENTER, SCREEN_CENTER, PANEL_HEIGHT, FACTOR_SCALE } from './constants.js'

function scale_generator(world) {

    let svg = document.createElement("svg")
    svg.setAttribute("class", "graduationSVG")
    svg.setAttribute("viewBox", `0 0 ${world.width} ${world.height}`)

    // X
    for(let i = -10; i <= 10; i++) {

        const text = document.createElement('text');

        text.setAttribute('x', (i * 200 * FACTOR_SCALE) + CENTER.x);
        text.setAttribute('y', world.height/2);
        text.setAttribute("class", "graduationText");
        text.innerText = `${i * 200}`;

        svg.appendChild(text);

    }

    // Z
    for(let i = -10; i <= 10; i++) {

        const text = document.createElement('text');
        text.setAttribute('x', world.width/2);
        text.setAttribute('y', (i * 200 * ((screen.width < 1201) ? FACTOR_SCALE : 1) + CENTER.y))
        text.setAttribute("class", "graduationText");
        text.innerText = `${i * 200}`;

        svg.appendChild(text);

    }

    // right (x)
    let arrow = document.createElement('polyline')
    let points = `${CENTER.x + 1800},${CENTER.y - 300} ${CENTER.x + 1800},${CENTER.y - 100} ${CENTER.x + 2000},${CENTER.y - 200}`
    arrow.setAttribute("points", points);
    arrow.setAttribute("style", "fill:black")
    svg.appendChild(arrow);

    // down (z)
    arrow = document.createElement('polyline')
    points = `${CENTER.x - 200},${CENTER.y + 1600} ${CENTER.x - 300},${CENTER.y + 1400} ${CENTER.x - 100},${CENTER.y + 1400}`
    arrow.setAttribute("points", points);
    arrow.setAttribute("style", "fill:black")
    svg.appendChild(arrow);


    // Axis letters

    // Z
    let text = document.createElement('text');
    text.innerText = "Z";
    text.setAttribute("x", CENTER.x - 250);
    text.setAttribute("y", CENTER.y + 1300);
    text.setAttribute("class", "axisTEXT")
    svg.appendChild(text);

    // X
    text = document.createElement('text');
    text.innerText = "X";
    text.setAttribute("x", CENTER.x + 1500);
    text.setAttribute("y", CENTER.y - 150);
    text.setAttribute("class", "axisTEXT")
    svg.appendChild(text);


    document.querySelector('.container').appendChild(svg);

}

function grid_generator(world) {

    let svg = document.createElement("svg")
    svg.setAttribute("viewBox", `0 100 ${world.width} ${world.height}`)

    // x
    for(let i = -10; i <= 10; i++) {

        const line = document.createElement('line');

        line.setAttribute('x1', -world.width);
        line.setAttribute('y1', (i * 200 * ((screen.width < 1201) ? FACTOR_SCALE : 1) ) + CENTER.y)
        line.setAttribute('x2', world.width*2);
        line.setAttribute('y2', (i * 200 * ((screen.width < 1201) ? FACTOR_SCALE : 1) ) + CENTER.y)

        line.setAttribute('stroke', 'black');
        line.setAttribute("class", "gridVG")

        svg.appendChild(line);

    }

    // z
    for(let i = -10; i <= 10; i++) {

        const line = document.createElement('line');

        line.setAttribute('y1', -world.height);
        line.setAttribute('x1', (i * 200 * FACTOR_SCALE) + CENTER.x)
        line.setAttribute('y2', world.height);
        line.setAttribute('x2', (i * 200 * FACTOR_SCALE) + CENTER.x);

        line.setAttribute('stroke', 'black');
        line.setAttribute("class", "gridVG")

        svg.appendChild(line);

    }

    document.querySelector('.container').appendChild(svg);

}


function draw_graduation(world) {
    grid_generator(world)
    scale_generator(world)
}

export {
    draw_graduation
}
