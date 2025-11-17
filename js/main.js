import { get_homes_data, get_world_data } from './fetches.js'
import { Circle } from './Circle.js'
import { world_data } from './misc.js'

const CURRENT = {
  "title": "TITLE",
  "x": 0,
  "y": 0
}

const colors = [
  "red",
  "blue",
  "green",
  "darkred",
  "lightred"
]

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
