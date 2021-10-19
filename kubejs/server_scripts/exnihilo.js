onEvent(`recipes`, event => {
  
    const pebble = [
        `exnihilosequentia:pebble_andesite`, 
        `exnihilosequentia:pebble_basalt`, 
        `exnihilosequentia:pebble_blackstone`, 
        `exnihilosequentia:pebble_diorite`, 
        `exnihilosequentia:pebble_granite`, 
        `exnihilosequentia:pebble_stone`
    ]

    const treeseed = [
      `exnihilosequentia:seed_darkoak`, 
      `exnihilosequentia:seed_birch`, 
      `exnihilosequentia:seed_acacia`, 
      `exnihilosequentia:seed_jungle`, 
      `exnihilosequentia:seed_oak`, 
      `exnihilosequentia:seed_spruce`
    ]

    const mainseed = [
      `exnihilosequentia:seed_carrot`, 
      `exnihilosequentia:seed_berry`, 
      `minecraft:beetroot_seeds`, 
      `exnihilosequentia:grass_seeds`, 
      `minecraft:melon_seeds`, 
      `minecraft:pumpkin_seeds`, 
      `minecraft:wheat_seeds`, 
      `exnihilosequentia:seed_sugarcane`, 
      `exnihilosequentia:seed_potato`, 
      `exnihilosequentia:seed_large_fern`, 
      `exnihilosequentia:seed_fern`, 
      `exnihilosequentia:seed_cactus`,
      `exnihilosequentia:seed_bamboo`
    ]

    const thermalseed = [
      `thermal:eggplant_seeds`, 
      `thermal:green_bean_seeds`, 
      `thermal:peanut_seeds`, 
      `thermal:strawberry_seeds`, 
      `thermal:tomato_seeds`, 
      `thermal:coffee_seeds`, 
      `thermal:hops_seeds`, 
      `thermal:tea_seeds`, 
      `thermal:frost_melon_seeds`, 
      `thermal:bell_pepper_seeds`, 
      `thermal:spinach_seeds`, 
      `thermal:sadiroot_seeds`, 
      `thermal:rice_seeds`, 
      `thermal:radish_seeds`, 
      `thermal:onion_seeds`, 
      `thermal:flax_seeds`, 
      `thermal:barley_seeds`, 
      `thermal:corn_seeds`
    ]

    const tinekrsand = [`tconstruct:sky_slime_sapling`, `tconstruct:ender_slime_sapling`, `tconstruct:earth_slime_sapling`, `tconstruct:earth_slime_grass_seeds`, `tconstruct:sky_slime_grass_seeds`, `tconstruct:ender_slime_grass_seeds`, `tconstruct:blood_slime_grass_seeds`, `minecraft:slime_ball`, `tconstruct:sky_slime_ball`, `tconstruct:blood_slime_ball`, `tconstruct:ender_slime_ball`, `tconstruct:blood_slime_sapling`, `minecraft:crimson_fungus`, `minecraft:warped_fungus`]

    const soulsandsoutput = [`minecraft:ghast_tear`, `minecraft:quartz`, `minecraft:nether_wart`]

    const orepiece = [`exnihilosequentia:piece_gold`, `exnihilosequentia:piece_osmium`, `exnihilosequentia:piece_iron`, `exnihilosequentia:piece_zinc`, `exnihilosequentia:piece_silver`, `exnihilosequentia:piece_nickel`, `exnihilosequentia:piece_lead`, `exnihilosequentia:piece_copper`, `exnihilosequentia:piece_aluminum`, `exnihilosequentia:piece_uranium`, `exnihilosequentia:piece_tin`]

    const gravelgem = [`minecraft:emerald`, `minecraft:diamond`]

    const dusts = [`minecraft:redstone`, `mekanism:salt`, `mana-and-artifice:vinteum_dust`, `mysticalagriculture:inferium_essence`, `minecraft:gunpowder`, `minecraft:glowstone_dust`, `minecraft:bone_meal`, `minecraft:blaze_powder`]

    const moredusts = [`minecraft:redstone`, `mysticalagriculture:inferium_essence`, `minecraft:gunpowder`, `minecraft:glowstone_dust`, `minecraft:bone_meal`, `minecraft:blaze_powder`]

    const otherdusts = [`mekanism:salt`, `mana-and-artifice:vinteum_dust`]


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


// Gravel Sieve
//
//      sieveadd(`string`, 1.0, `minecraft:gravel`, `minecraft:flint`, null)
//      
//      sieveadd(`flint`, 0.75, `minecraft:gravel`, `minecraft:flint`, null)
//      sieveadd(`flint`, 0.75, `minecraft:gravel`, `exnihilosequentia:piece_iron`, null)
//      sieveadd(`flint`, 0.25, `minecraft:gravel`, `exnihilosequentia:piece_gold`, null)
//      sieveadd(`flint`, 0.25, `minecraft:gravel`, `exnihilosequentia:piece_copper`, null)
//      sieveadd(`flint`, 0.25, `minecraft:gravel`, `exnihilosequentia:piece_tin`, null)
//      sieveadd(`flint`, 0.25, `minecraft:gravel`, `minecraft:coal`, null)
//     
//      sieveadd(`iron`, 0.5, `minecraft:gravel`, `minecraft:flint`, null)
//      sieveadd(`iron`, 0.25, `minecraft:gravel`, `minecraft:lapis_lazuli`, null)
//      sieveadd(`iron`, 0.5, `minecraft:gravel`, `minecraft:coal`, null)
//
//      sieveadd(`diamond`, 0.25, `minecraft:gravel`, `minecraft:flint`, null)
//      sieveadd(`diamond`, 0.35, `minecraft:gravel`, `minecraft:lapis_lazuli`, null)
//      sieveadd(`diamond`, 0.6, `minecraft:gravel`, `minecraft:coal`, null)
//
//      sieveadd(`emerald`, 0.25, `minecraft:gravel`, `minecraft:flint`, null)
//      sieveadd(`emerald`, 0.55, `minecraft:gravel`, `minecraft:lapis_lazuli`, null)
//      sieveadd(`emerald`, 0.6, `minecraft:gravel`, `minecraft:coal`, null)
//
//      sieveadd(`netherite`, 0.25, `minecraft:gravel`, `minecraft:flint`, null)
//      sieveadd(`netherite`, 0.75, `minecraft:gravel`, `minecraft:lapis_lazuli`, null)
//      sieveadd(`netherite`, 0.75, `minecraft:gravel`, `minecraft:coal`, null)
//
//    orepiece.forEach(orepiece => {
//        sieveadd(`iron`, 0.35, `minecraft:gravel`, orepiece, null)
//        sieveadd(`diamond`, 0.5, `minecraft:gravel`, orepiece, null)
//        sieveadd(`emerald`, 0.6, `minecraft:gravel`, orepiece, null)
//        sieveadd(`netherite`, 0.75, `minecraft:gravel`, orepiece, null)
//    })
//
//    gravelgem.forEach(gravelgem => {
//      sieveadd(`iron`, 0.015, `minecraft:gravel`, gravelgem, null)
//      sieveadd(`diamond`, 0.02, `minecraft:gravel`, gravelgem, null)
//      sieveadd(`emerald`, 0.025, `minecraft:gravel`, gravelgem, null)
//      sieveadd(`netherite`, 0.03, `minecraft:gravel`, gravelgem, null)
//  })
//
//    sieveadd(`iron`, 0.5, `minecraft:gravel`, `exnihilosequentia:piece_iron`, null)
//    sieveadd(`diamond`, 0.5, `minecraft:gravel`, `exnihilosequentia:piece_iron`, null)
//    sieveadd(`emerald`, 0.5, `minecraft:gravel`, `exnihilosequentia:piece_iron`, null)
//    sieveadd(`netherite`, 0.5, `minecraft:gravel`, `exnihilosequentia:piece_iron`, null)
//
     
// Sand Sieve

// Dust Sieve

  dusts.forEach(dusts => {
      sieveadd(`iron`, 0.2, `exnihilosequentia:dust`, dusts, null)
      sieveadd(`diamond`, 0.3, `exnihilosequentia:dust`, dusts, null)
      sieveadd(`emerald`, 0.4, `exnihilosequentia:dust`, dusts, null)
  })

  sieveadd(`string`, 0.2, `exnihilosequentia:dust`, `minecraft:bone_meal`, null)
  sieveadd(`flint`, 0.25, `exnihilosequentia:dust`, `minecraft:bone_meal`, null)

  moredusts.forEach(moredusts => {
    sieveadd(`netherite`, 0.75, `exnihilosequentia:dust`, moredusts, null)
  })

  otherdusts.forEach(otherdusts => {
    sieveadd(`netherite`, 0.5, `exnihilosequentia:dust`, otherdusts, null)
  })


// Soul Sand Sieve
//
//      sieveadd(`diamond`, 0.1, `minecraft:soul_sand`, `minecraft:nether_wart`, null)
//      sieveadd(`emerald`, 0.1, `minecraft:soul_sand`, `minecraft:nether_wart`, null)
//      sieveadd(`netherite`, 0.1, `minecraft:soul_sand`, `minecraft:nether_wart`, null)
//
//      sieveadd(`diamond`, 1.0, `minecraft:soul_sand`, `2x minecraft:quartz`, null)
//      sieveadd(`emerald`, 1.0, `minecraft:soul_sand`, `3x minecraft:quartz`, null)
//      sieveadd(`netherite`, 1.0, `minecraft:soul_sand`, `3x minecraft:quartz`, null)
//
//      sieveadd(`diamond`, 0.01, `minecraft:soul_sand`, `minecraft:ghast_tear`, null)
//      sieveadd(`emerald`, 0.015, `minecraft:soul_sand`, `minecraft:ghast_tear`, null)
//      sieveadd(`netherite`, 0.02, `minecraft:soul_sand`, `minecraft:ghast_tear`, null)
//
//
//
//
// Crushed Endstone Sieve
//
//sieveadd(`diamond`, 0.01, `exnihilosequentia:crushed_end_stone`, `minecraft:ender_pearl`, null)
//sieveadd(`emerald`, 0.015, `exnihilosequentia:crushed_end_stone`, `minecraft:ender_pearl`, null)
//sieveadd(`netherite`, 0.025, `exnihilosequentia:crushed_end_stone`, `minecraft:ender_pearl`, null)
//
//sieveadd(`diamond`, 0.2, `exnihilosequentia:crushed_end_stone`, `minecraft:chorus_flower`, null)
//sieveadd(`emerald`, 0.15, `exnihilosequentia:crushed_end_stone`, `minecraft:chorus_flower`, null)
//sieveadd(`netherite`, 0.1, `exnihilosequentia:crushed_end_stone`, `minecraft:chorus_flower`, null)

// Crushed Netherrack Sieve

//sieveadd(`diamond`, 0.08, `exnihilosequentia:crushed_netherrack`, `minecraft:netherite_scrap`, null)
//sieveadd(`emerald`, 0.1, `exnihilosequentia:crushed_netherrack`, `minecraft:netherite_scrap`, null)
//sieveadd(`netherite`, 0.25, `exnihilosequentia:crushed_netherrack`, `minecraft:netherite_scrap`, null)
//
//sieveadd(`diamond`, 0.25, `exnihilosequentia:crushed_netherrack`, `minecraft:quartz`, null)
//sieveadd(`emerald`, 0.5, `exnihilosequentia:crushed_netherrack`, `minecraft:quartz`, null)
//sieveadd(`netherite`, 1.0, `exnihilosequentia:crushed_netherrack`, `minecraft:quartz`, null)
//
//sieveadd(`netherite`, 0.25, `exnihilosequentia:crushed_netherrack`, `exnihilosequentia:piece_cobalt`, null)
//
//sieveadd(`netherite`, 0.25, `exnihilosequentia:crushed_netherrack`, `create:rose_quartz`, null)
//
//sieveadd(`netherite`, 1.0, `exnihilosequentia:crushed_netherrack`, `2x mysticalagriculture:inferium_essence`, null)

// SLime Sieve
//
//tinekrsand.forEach(tinekrsand => {
//        sieveadd(`diamond`, 0.1, `tconstruct:earth_slime_dirt`, tinekrsand, null)
//        sieveadd(`emerald`, 0.1, `tconstruct:earth_slime_dirt`, tinekrsand, null)
//        sieveadd(`netherite`, 0.1, `tconstruct:earth_slime_dirt`, tinekrsand, null)
//    })
//

// Dirt Sieve

//    pebble.forEach(pebble => {
//        sieveadd(`string`, 1.0, `minecraft:dirt`, `4x `.concat(pebble), null)
//    })
//
//    treeseed.forEach(treeseed => {
//      sieveadd(`flint`, 0.5, `minecraft:dirt`, treeseed, null)
//    })
//
//    mainseed.forEach(mainseed => {
//      sieveadd(`iron`, 0.2, `minecraft:dirt`, mainseed, null)
//    })
//    
//    thermalseed.forEach(thermalseed => {
//      sieveadd(`diamond`, 0.05, `minecraft:dirt`, thermalseed, null)
//    })
//
//    sieveadd(`emerald`, 1.0, `minecraft:dirt`, `exnihilosequentia:ancient_spores`, null)
//
//    sieveadd(`emerald`, 1.0, `minecraft:dirt`, `minecraft:cocoa_beans`, null)





    //event.remove({type:`exnihilosequentia:sieve`, input: `minecraft:dirt`})

    //event.remove({}) // Removes all recipes (nuke option, usually not recommended)
    //event.remove({output: 'minecraft:stone_pickaxe'}) // Removes all recipes where output is stone pickaxe
    //event.remove({output: '#minecraft:wool'}) // Removes all recipes where output is Wool tag
    //event.remove({input: '#forge:dusts/redstone'}) // Removes all recipes where input is Redstone Dust tag
    //event.remove({mod: 'quartzchests'}) // Remove all recipes from Quartz Chests mod
    //event.remove({type: 'minecraft:campfire_cooking'}) // Remove all campfire cooking recipes
    //event.remove({id: 'minecraft:glowstone'}) // Removes recipe by ID. in this case, data/minecraft/recipes/glowstone.json
    //event.remove({output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking'}) // You can combine filters, to create ANDk logic
    
  })