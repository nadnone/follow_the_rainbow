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



      if (screen.availWidth < 1200)
      {
            document.querySelector('.panel').style.width = `${screenWidth/4}px`
            document.querySelector('.panel').style.fontSize = '32px'
            document.querySelector('.panel').style.transform = `translateX(${ev.clientX - screenWidth/2}px) ` +
                                                            `translateY(${ev.clientY - screenHeight/2}px)`
      }
      else
      {
            document.querySelector('.panel').style.fontSize = '18px'
            document.querySelector('.panel').style.left = 'calc(50% - 7.5%)'
            document.querySelector('.panel').style.top = 'calc(50% - 2.5%)'

      }

});



export const world_data = await get_world_data()
