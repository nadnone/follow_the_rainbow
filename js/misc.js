import { get_world_data } from './fetches.js'
import { CENTER, SCREEN_CENTER, SCREEN_SIZE, PANEL_HEIGHT } from './constants.js'

const world = await get_world_data();



function computer() {

      document.body.addEventListener('mousemove', (ev) => {


            const world_x = (world.width / (window.innerWidth / ev.pageX)) - CENTER.x
            const world_y = (world.height / (window.innerHeight / ev.pageY)) - CENTER.y

            const title = ev.target.attributes.title?.value;

            document.querySelector(".title").innerText = (title != undefined) ? title : "FREE"
            document.querySelector(".coords").innerText = `X: ${world_x.toFixed(0)} Z: ${world_y.toFixed(0)}`;

      });
}

function phones() {

      document.body.addEventListener("touchstart", (ev) => {

            const world_x = world.width / (SCREEN_SIZE.x / ev.changedTouches[0].pageX) - CENTER.x
            const world_y = world.height / (SCREEN_SIZE.y / ev.changedTouches[0].pageY) - CENTER.y

            const title = ev.target.attributes.title?.value;

            document.querySelector(".title").innerText = (title != undefined) ? title : "FREE"
            document.querySelector(".coords").innerText = `X: ${world_x.toFixed(0)} Z: ${world_y.toFixed(0)}`;

      })


}


export const world_data = await get_world_data()

export {
      phones,
      computer
}
