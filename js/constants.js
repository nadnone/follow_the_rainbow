import { world_data } from './misc.js'

export const PANEL_HEIGHT = 150

export const CENTER = {
  "x": world_data.width/2,
  "y": world_data.height/2
}

export const SCREEN_CENTER = {
  "x": document.querySelector('.graph').clientWidth/2,
  "y": document.querySelector('.graph').clientHeight/2
}


export const SCREEN_SIZE = {
  "x": document.querySelector('.graph').clientWidth,
  "y": document.querySelector('.graph').clientHeight
}


export let FACTOR_SCALE = document.querySelector('.graph').clientHeight  /
                          document.querySelector('.graph').clientWidth
