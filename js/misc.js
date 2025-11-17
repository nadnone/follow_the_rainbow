import { get_world_data } from './fetches.js'
import { CENTER, FACTOR } from './constants.js'

const world = await get_world_data();

document.body.addEventListener('mousemove', (ev) => {

      let world_x = (ev.clientX - CENTER.x) * FACTOR
      let world_y = (ev.clientY - CENTER.y) * FACTOR


      // TODO: convert map world to screen world

      document.querySelector(".title").innerText = ev.target.attributes.title?.value;
      document.querySelector(".coords").innerText = `X: ${world_x} Z: ${world_y}`;

});


export const world_data = await get_world_data()
