import { get_world_data } from './fetches.js'
import { CENTER, SCREEN_CENTER } from './constants.js'

const world = await get_world_data();

document.body.addEventListener('mousemove', (ev) => {

      const screenWidth = document.body.clientWidth
      const screenHeight= document.body.clientHeight
      let worldWidthT
      let worldHeightT

      if(screenWidth>=screenHeight){
            worldWidthT = screenWidth*world.height/screenHeight
            worldHeightT = world.height
      }

      else{
            worldHeightT = screenHeight*world.width/screenWidth
            worldWidthT = world.width
      }
      
      const world_x = worldWidthT / (document.body.clientWidth / ev.clientX) - worldWidthT/2
      const world_y = worldHeightT / (window.innerHeight / ev.clientY) - worldHeightT/2

      const title = ev.target.attributes.title?.value;

      document.querySelector(".title").innerText = (title != undefined) ? title : "FREE"
      document.querySelector(".coords").innerText = `X: ${world_x.toFixed(0)} Z: ${world_y.toFixed(0)}`;

});


export const world_data = await get_world_data()
