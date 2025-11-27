/***
 * @author Nad', waneasle
 *
 * Constants
 */



import { get_homes_data, get_world_data } from './fetches.js'

const world_data = await get_world_data();
const home_data = await get_homes_data();


export const CENTER = {
  "x": world_data.width/2,
  "y": world_data.height/2
}

export const SCREEN_CENTER = {
  "x": window.innerWidth/2,
  "y": window.innerHeight/2
}


function mouseConstants()
{
  const screenWidth = document.body.clientWidth
  const screenHeight = document.body.clientHeight
  let worldWidthT
  let worldHeightT

  if(screenWidth>=screenHeight){
    worldWidthT = screenWidth*world_data.height/screenHeight
    worldHeightT = world_data.height
  }

  else{
    worldHeightT = screenHeight*world_data.width/screenWidth
    worldWidthT = world_data.width
  }
  return{
    'screenWidth': screenWidth,
    'screenHeight': screenHeight,
    'worldWidthT': worldWidthT, 
    'worldHeightT': worldHeightT
  }
}

export {
  world_data,
  home_data,
  mouseConstants
}
