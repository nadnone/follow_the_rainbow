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

    document.body.appendChild(svg);

}

function grid_generator() {

    let svg = document.createElement("svg")
    svg.setAttribute("viewBox", `0 0 ${10*200*2} 25`)

    // X
    for(let i = -10; i <= 10; i++) {

        const line = document.createElement('line');

        line.setAttribute('x1', 0);
        line.setAttribute('y1', i * 200 + 20)
        line.setAttribute('x2', 10*200*2);
        line.setAttribute('y2', i * 200 + 20);
        line.setAttribute('stroke', 'black');
        line.setAttribute("class", "gridVG")

        svg.appendChild(line);

    }

    // Z
    for(let i = -10; i <= 10; i++) {

        const line = document.createElement('line');

        line.setAttribute('y1', -10*200*2);
        line.setAttribute('x1', (i + 10) * 200 + 20)
        line.setAttribute('y2', 10*200*2);
        line.setAttribute('x2', (i + 10) * 200 + 20);
        line.setAttribute('stroke', 'black');
        line.setAttribute("class", "gridVG")

        svg.appendChild(line);

    }

    document.body.appendChild(svg);

}

export {
    grid_generator,
    scale_generator
}
