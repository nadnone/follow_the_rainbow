import { get_homes_data, get_world_data } from './fetches.js'
import { Circle } from './Circle.js'
import { world_data } from './misc.js'
import { grid_generator, scale_generator } from './gridGenerator.js'

const CURRENT = {
  "title": "",
  "x": 0,
  "y": 0
}

const homesList = [];

async function init() {


  const data = await get_homes_data();


  for (let i = 1; i < data.length; i++) {

    const table = data[i].split(",")

    let x = parseFloat(table[1])
    let y = parseFloat(table[2])

    if (table[1] == 0 || table[2] == 0)
    {
      x = 0
      y = 0
    }


    homesList.push(
      new Circle(
        table[0],
        table[3],
        parseFloat(x),
        parseFloat(y),
        300,
        world_data)
    )

  }


}

init()

grid_generator()
scale_generator()
