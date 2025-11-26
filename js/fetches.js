/***
 * @author Nad'
 *
 * imports from external json or text files
 */



async function get_homes_data() {

    const res = fetch("./homes.csv")
      .then(res => res.text())
      .catch(err => console.log(err))


    let data = await res
    data = data.split("\n")
    data.pop()

    return data;
}


async function get_world_data() {

      const res = fetch("./world.json")
        .then(res => res.json())
        .catch(err => console.log(err))


      let data = await res

      return data;
}


export {
  get_homes_data,
  get_world_data
}
