import { get_world_data } from './fetches.js'

import {
      screenWidth,
      screenHeight,
      worldWidthT,
      worldHeightT
} from './constants.js'

const world = await get_world_data();

/***
 * @author Nad', waneasle
 *
 * generate the wallpaper map
 */

document.body.addEventListener('mousemove', (ev) => {

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
                                                            `translateY(${ev.pageY - screenHeight/2.1}px)`
      }     
      else
      {
            document.querySelector('.panel').style.fontSize = '18pt'
            document.querySelector('.panel').style.width = '144pt'
            document.querySelector('.panel').style.height = '50pt'
            document.querySelector('.panel').style.left = 'calc(50% - 72pt)'
            document.querySelector('.panel').style.top = 'calc(50% - 25pt)'

      }

});

/***
 * @author Nad'
 *
 * create a custom home from the x,z variables given in the HTTP/GET
 */

function custom_home(data)
{


      const user_x = location.search.match(/x\=([\-0-9]{1,4})/)
      const user_y = location.search.match(/z\=([\-0-9]{1,4})/)

      if (user_x != null && user_y != null)
      {
            data.push(`USER, ${user_x[1]}, ${user_y[1]}, black`)
      }

}

/***
 * @author Nad'
 *
 * generate the wallpaper map
 */

function background_scale() {

      const parent = document.querySelector('.container');
      const wallpaper = document.createElement('img');

      wallpaper.src = './assets/minecraft_map.png';
      wallpaper.style.width = `${worldWidthT}px`
      wallpaper.style.height = `${worldHeightT}px`
      wallpaper.style.transform = ` scale(${1.05}) translateX('${-worldWidthT/2}px') translateY('${-worldHeightT/2}px')`

      parent.appendChild(wallpaper);
}


/***
 * @author Nad'
 *
 * automatically resize the webapp when browser resized
 */

function automatic_resize() {

      addEventListener('resize', () => {
            window.location.reload();
      })

}

export { custom_home, background_scale, automatic_resize }

export const world_data = await get_world_data()
