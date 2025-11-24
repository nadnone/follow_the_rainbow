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
      
      const world_x = worldWidthT / (screenWidth / ev.pageX) - worldWidthT/2
      const world_y = worldHeightT / (screenHeight / ev.pageY) - worldHeightT/2

      const title = ev.target.attributes.title?.value;

      document.querySelector(".title").innerText = (title != undefined) ? title : "FREE"
      document.querySelector(".coords").innerText = `X: ${world_x.toFixed(0)} Z: ${world_y.toFixed(0)}`;

      var screenTemp
      if (screen.availHeight>screen.availWidth)
      {
            screenTemp = screen.availWidth
      }
      else
      {
            screenTemp = screen.availHeight
      }

      if (screenTemp < 1200)
      {
            document.querySelector('.panel').style.transform = `translateX(${ev.pageX - screenWidth/2-document.querySelector('.panel').offsetWidth/2}px) ` +
                                                            `translateY(${ev.pageY - screenHeight/2}px)`
      }     
      else
      {
            document.querySelector('.panel').style.left = 'calc(50% - 72pt)'
            document.querySelector('.panel').style.top = 'calc(50% - 25pt)'

      }

});



export const world_data = await get_world_data()
