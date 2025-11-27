import { world_data, home_data } from './constants.js'
import { Circle } from './Circle.js'
import { custom_home, background_scale, automatic_resize } from './misc.js'
import { GridGenerator } from './GridGenerator.js'


export class InteractiveMap {

    #homesList

    constructor()
    {
        this.#homesList = [];
    }

    async init()
    {


        // for guest can add their own home temporarily
        custom_home(await home_data)

        for (let i = 1; i < home_data.length; i++)
        {

            const table = home_data[i].split(",")

            let x = parseFloat(table[1])
            let y = parseFloat(table[2])


            this.#homesList.push(
                new Circle(table[0], table[3], x, y)
            )

        }


    }



}
