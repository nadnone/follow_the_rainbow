/***
 * @author Nad'
 *
 * main
 */



import { get_homes_data, get_world_data } from './fetches.js'
import { Circle } from './Circle.js'
import { world_data, custom_home, background_scale, automatic_resize } from './misc.js'
import { draw_graduation } from './gridGenerator.js'

const CURRENT = {
  "title": "",
  "x": 0,
  "y": 0
}

const homesList = [];

async function init() {


  const data = await get_homes_data();

  // for guest can add their own home temporarily
  custom_home(data)

  for (let i = 1; i < data.length; i++) {

    const table = data[i].split(",")

    let x = parseFloat(table[1])
    let y = parseFloat(table[2])


    homesList.push(
      new Circle(
        table[0],
        table[3],
        parseFloat(x),
        parseFloat(y),
        300,
        )
    )

  }


}

init()
draw_graduation(world_data)

/*
 * TODO debug the scale and the position
 */
//background_scale()


automatic_resize()
