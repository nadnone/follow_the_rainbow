/***
 * @author Nad', waneasle
 *
 * Constants
 */



import { world_data } from './misc.js'

export const CENTER = {
  "x": world_data.width/2,
  "y": world_data.height/2
}

export const SCREEN_CENTER = {
  "x": window.innerWidth/2,
  "y": window.innerHeight/2
}



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

export {
  screenWidth,
  screenHeight,
  worldWidthT,
  worldHeightT
}
