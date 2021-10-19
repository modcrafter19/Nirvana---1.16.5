onEvent(`recipes`, event => {

event.remove({type: `exnihilosequentia:sieve`})

// [mesh, chance, result]

const gravel = [
    [`iron`, 0.1, `minecraft:ghast_tear`],
    [`iron`, 0.2, `minecraft:quartz`]
]

const dirt = [
    [`iron`, 0.3, `minecraft:ghast_tear`],
    [`iron`, 0.4, `minecraft:quartz`]
]


// Dictionary of Inputs -- [arrayname, item, water]
const input = [
    [gravel, `minecraft:gravel`, null],
    [dirt, `minecraft:dirt`, null]
]

// -------------------------------------------------------------------------------- //

    function sieveadd(mesh, chance, input, result, wlog) {
        event.custom({
          type: `exnihilosequentia:sieve`,
          rolls: [{
            chance: chance,
            mesh: mesh
          }],
          input: Ingredient.of(input).toJson(),
          result: Item.of(result).toResultJson(),
          waterlogged: wlog
        })
      }

    for (var j = 0; j < 2; j++) {
        for (var i = 0; i < 2; i++) {
            sieveadd((input[j][0])[i][0], (input[j][0])[i][1], input[j][1], (input[j][0])[i][2], input[j][2])
        } 
    }





  })