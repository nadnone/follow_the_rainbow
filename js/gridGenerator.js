import { CENTER, SCREEN_CENTER } from './constants.js'

function scale_generator(world) {

    let svg = document.createElement("svg")
    svg.setAttribute("class", "graduationSVG")
    svg.setAttribute("viewBox", `0 0 ${world.width} ${world.height}`)

    // X
    for(let i = -10; i <= 10; i++) {

        const text = document.createElement('text');

        text.setAttribute('x', i * 200 + CENTER.x);
        text.setAttribute('y', world.height/2);
        text.setAttribute("class", "graduationText");
        text.innerText = `${i * 200}`;

        svg.appendChild(text);

    }

    // Z
    for(let i = -10; i <= 10; i++) {

        const text = document.createElement('text');

        text.setAttribute('x', world.width/2);
        text.setAttribute('y', i * 200 + CENTER.y)
        text.setAttribute("class", "graduationText");
        text.innerText = `${i * 200}`;

        svg.appendChild(text);

    }

    // right (x)
    let arrow = document.createElement('polyline')
    let points = "3800,0 3800,-60 4000,-30"
    arrow.setAttribute("points", points);
    arrow.setAttribute("style", "fill:black")
    svg.appendChild(arrow);

    // down (z)
    arrow = document.createElement('polyline')
    points = "1970,1500 1940,1300 2000,1300"
    arrow.setAttribute("points", points);
    arrow.setAttribute("style", "fill:black")
    svg.appendChild(arrow);


    // Axis letters

    // Z
    let text = document.createElement('text');
    text.innerText = "Z";
    text.setAttribute("x", 1800);
    text.setAttribute("y", 1300);
    text.setAttribute("class", "axisTEXT")
    svg.appendChild(text);

    // X
    text = document.createElement('text');
    text.innerText = "X";
    text.setAttribute("x", 3600);
    text.setAttribute("y", -60);
    text.setAttribute("class", "axisTEXT")
    svg.appendChild(text);


    document.body.appendChild(svg);

}

function grid_generator(world) {

    let svg = document.createElement("svg")
    svg.setAttribute("viewBox", `0 0 ${world.width} ${world.height}`)

    // X
    for(let i = -10; i <= 10; i++) {

        const line = document.createElement('line');

        line.setAttribute('x1', 0);
        line.setAttribute('y1', i * 200 + CENTER.y)
        line.setAttribute('x2', world.width);
        line.setAttribute('y2', i * 200 + CENTER.y)
        line.setAttribute('stroke', 'black');
        line.setAttribute("class", "gridVG")

        svg.appendChild(line);

    }

    // Z
    for(let i = -10; i <= 10; i++) {

        const line = document.createElement('line');

        line.setAttribute('y1', -world.width);
        line.setAttribute('x1', i * 200 + CENTER.x)
        line.setAttribute('y2', world.height);
        line.setAttribute('x2', i * 200 + CENTER.x);
        line.setAttribute('stroke', 'black');
        line.setAttribute("class", "gridVG")

        svg.appendChild(line);

    }

    document.body.appendChild(svg);

}


function draw_graduation(world) {
    grid_generator(world)
    scale_generator(world)
}

export {
    draw_graduation
}
