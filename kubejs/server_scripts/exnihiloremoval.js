onEvent(`recipes`, event => {
    const dirtoutput = [`exnihilosequentia:ancient_spores`, `minecraft:beetroot_seeds`, `exnihilosequentia:grass_seeds`, `minecraft:melon_seeds`, `exnihilosequentia:pebble_andesite`, `exnihilosequentia:pebble_basalt`, `exnihilosequentia:pebble_blackstone`, `exnihilosequentia:pebble_diorite`, `exnihilosequentia:pebble_granite`, `exnihilosequentia:pebble_stone`, `minecraft:pumpkin_seeds`, `exnihilosequentia:seed_acacia`, `exnihilosequentia:seed_bamboo`, `exnihilosequentia:seed_berry`, `exnihilosequentia:seed_birch`, `exnihilosequentia:seed_cactus`, `exnihilosequentia:seed_carrot`, `exnihilosequentia:seed_darkoak`, `exnihilosequentia:seed_fern`, `exnihilosequentia:seed_jungle`, `exnihilosequentia:seed_large_fern`, `exnihilosequentia:seed_oak`, `exnihilosequentia:seed_potato`, `exnihilosequentia:seed_spruce`, `exnihilosequentia:seed_sugarcane`, `minecraft:wheat_seeds`]

    dirtoutput.forEach(dirtoutput => {
        event.remove({type:`exnihilosequentia:sieve`, output: dirtoutput})
      })
    
    const leavesoutput = [`minecraft:apple`, `minecraft:golden_apple`, `exnihilosequentia:silkworm`, `minecraft:acacia_sapling`, `minecraft:birch_sapling`, `minecraft:dark_oak_sapling`, `minecraft:jungle_sapling`, `minecraft:oak_sapling`, `minecraft:spruce_sapling`]

    leavesoutput.forEach(leavesoutput => {
        event.remove({type:`exnihilosequentia:sieve`, output: leavesoutput})
      })


    const crushednetherrackoutput = [`minecraft:netherite_scrap`, `exnihilosequentia:piece_gold`, `exnihilosequentia:piece_cobalt`]

    crushednetherrackoutput.forEach(crushednetherrackoutput => {
        event.remove({type:`exnihilosequentia:sieve`, output: crushednetherrackoutput})
      })
  
    event.remove({type:`exnihilosequentia:sieve`, output: `minecraft:ender_pearl`})
    
    event.remove({type:`exnihilosequentia:sieve`, output: `minecraft:gravel`})
    event.remove({type:`exnihilosequentia:sieve`, output: `minecraft:dirt`})
    event.remove({type:`exnihilosequentia:sieve`, output: `minecraft:cocoa_beans`})

    const tinkersoutput = [`tconstruct:sky_slime_sapling`, `tconstruct:ender_slime_sapling`, `tconstruct:earth_slime_sapling`, `tconstruct:earth_slime_grass_seeds`, `tconstruct:sky_slime_grass_seeds`, `tconstruct:ender_slime_grass_seeds`, `tconstruct:blood_slime_grass_seeds`, `minecraft:slime_ball`, `tconstruct:sky_slime_ball`, `tconstruct:blood_slime_ball`, `tconstruct:ender_slime_ball`, `tconstruct:blood_slime_sapling`]

    tinkersoutput.forEach(tinkersoutput => {
        event.remove({type:`exnihilosequentia:sieve`, output: tinkersoutput})
      })
  
    const soulsandsoutput = [`minecraft:ghast_tear`, `minecraft:quartz`, `minecraft:nether_wart`]

    soulsandsoutput.forEach(soulsandsoutput => {
        event.remove({type:`exnihilosequentia:sieve`, output: soulsandsoutput})
      })

    const mainoutput = [`thermal:apatite`, `thermal:cinnabar`, `minecraft:diamond`, `mekanism:fluorite_gem`, `thermal:niter`, `exnihilosequentia:piece_aluminum`, `exnihilosequentia:piece_copper`, `exnihilosequentia:piece_iron`, `exnihilosequentia:piece_nickel`, `exnihilosequentia:piece_silver`, `exnihilosequentia:piece_tin`, `exnihilosequentia:piece_uranium`, `exnihilosequentia:piece_zinc`, `minecraft:prismarine_crystals`, `minecraft:prismarine_shard`, `minecraft:redstone`, `mekanism:salt`, `thermal:sulfur`, `exnihilosequentia:piece_osmium`, `minecraft:emerald`, `elementalcraft:inertcrystal`, `minecraft:gunpowder`, `minecraft:bone_meal`, `minecraft:blaze_powder`, `minecraft:glowstone_dust`, `minecraft:lapis_lazuli`, `minecraft:coal`, `exnihilosequentia:piece_lead`, `minecraft:flint`]

    mainoutput.forEach(mainoutput => {
      event.remove({type:`exnihilosequentia:sieve`, output: mainoutput})
    })

    

    //event.remove({type:`exnihilosequentia:sieve`, output: `minecraft:dirt`})

    //event.remove({}) // Removes all recipes (nuke option, usually not recommended)
    //event.remove({output: 'minecraft:stone_pickaxe'}) // Removes all recipes where output is stone pickaxe
    //event.remove({output: '#minecraft:wool'}) // Removes all recipes where output is Wool tag
    //event.remove({input: '#forge:dusts/redstone'}) // Removes all recipes where input is Redstone Dust tag
    //event.remove({mod: 'quartzchests'}) // Remove all recipes from Quartz Chests mod
    //event.remove({type: 'minecraft:campfire_cooking'}) // Remove all campfire cooking recipes
    //event.remove({id: 'minecraft:glowstone'}) // Removes recipe by ID. in this case, data/minecraft/recipes/glowstone.json
    //event.remove({output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking'}) // You can combine filters, to create ANDk logic
    
  })