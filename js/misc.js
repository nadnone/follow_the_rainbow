import {
      world_data,
      mouseConstants
} from './constants.js'

/***
 * @author Nad', waneasle
 *
 * mouve hover event
 */

document.body.addEventListener('mousemove', (ev) => {

      let callback = mouseConstants()

      const world_x = callback.worldWidthT / (callback.screenWidth / ev.pageX) - callback.worldWidthT/2
      const world_y = callback.worldHeightT / (callback.screenHeight / ev.pageY) - callback.worldHeightT/2

      const title = ev.target.attributes.title?.value;

      document.querySelector(".title").innerText = (title != undefined) ? title : "FREE"
      document.querySelector(".coords").innerText = `X: ${world_x.toFixed(0)} Z: ${world_y.toFixed(0)}`;
      document.querySelector('.panel').style.visibility = 'visible'

      let screenTemp
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
            const panelmiddle = document.querySelector('.panel').offsetWidth/2;
            document.querySelector('.panel').style.transform =
                                          `translateX(${ev.pageX - callback.screenWidth/2 - panelmiddle}px) ` +
                                          `translateY(${ev.pageY - callback.screenHeight/2.1}px)`
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
 * generate the wallpaper
 */

function background_scale() {

      const parent = document.querySelector('.container');
      const wallpaper = document.createElement('img');

      wallpaper.src = './assets/minecraft_map.png';
      wallpaper.style.width = `${100}px`
      wallpaper.style.height = `${100}px`
      wallpaper.style.transform = `scale(${1.05}) translateX('${-100/2}px') translateY('${-100/2}px')`

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
