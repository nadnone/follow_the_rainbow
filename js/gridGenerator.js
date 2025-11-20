import { CENTER } from './constants.js'

function scale_generator() {

    let svg = document.createElement("svg")
    svg.setAttribute("class", "graduationSVG")
    svg.setAttribute("viewBox", `0 0 ${10*200*2} 25`)


    // X
    for(let i = -10; i <= 10; i++) {

        const text = document.createElement('text');

        text.setAttribute('x', (i + 10) * 200);
        text.setAttribute('y', 40);
        text.setAttribute("class", "graduationText");
        text.innerText = `${i * 200}`;

        svg.appendChild(text);

    }

    // Z
    for(let i = -10; i <= 10; i++) {

        const text = document.createElement('text');

        text.setAttribute('x', 10*200);
        text.setAttribute('y', i * 200 + 40);
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

function grid_generator() {

    let svg = document.createElement("svg")
    svg.setAttribute("viewBox", `0 0 ${10*200*2} 25`)

    // X
    for(let i = -20; i <= 20; i++) {

        const line = document.createElement('line');

        line.setAttribute('x1', 0);
        line.setAttribute('y1', i * 200)
        line.setAttribute('x2', 10*200*2);
        line.setAttribute('y2', i * 200);
        line.setAttribute('stroke', 'black');
        line.setAttribute("class", "gridVG")

        svg.appendChild(line);

    }

    // Z
    for(let i = -20; i <= 20; i++) {

        const line = document.createElement('line');

        line.setAttribute('y1', -10*200*2);
        line.setAttribute('x1', (i + 10) * 200)
        line.setAttribute('y2', 10*200*2);
        line.setAttribute('x2', (i + 10) * 200);
        line.setAttribute('stroke', 'black');
        line.setAttribute("class", "gridVG")

        svg.appendChild(line);

    }

    document.body.appendChild(svg);

}


function draw_graduation() {
    grid_generator()
    scale_generator()
}

export {
    draw_graduation
}
