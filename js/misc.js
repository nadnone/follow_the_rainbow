import { get_world_data } from './fetches.js'
import { CENTER, FACTOR } from './constants.js'

const world = await get_world_data();

document.body.addEventListener('mousemove', (ev) => {

      let world_x = world.width / (window.innerWidth / ev.clientX) - world.width/2
      let world_y = world.height / (window.innerHeight/ev.clientY) - world.height/2

      const title = ev.target.attributes.title?.value;

      document.querySelector(".title").innerText = (title != undefined) ? title : "FREE"
      document.querySelector(".coords").innerText = `X: ${world_x.toFixed(0)} Z: ${world_y.toFixed(0)}`;

});


export const world_data = await get_world_data()
