/***
 * @author Nad'
 *
 * main
 */
import { world_data, home_data } from './constants.js'
import { Circle } from './Circle.js'
import { custom_home, background_scale, automatic_resize } from './misc.js'
import { GridGenerator } from './GridGenerator.js'
import { InteractiveMap } from './InteractiveMap.js'


// circles rendering
new InteractiveMap().init()

// grid rendering
new GridGenerator()

/*
 * TODO debug the scale and the position
 */
background_scale()

// automatic resizing of the elements when browser window resized
automatic_resize()
