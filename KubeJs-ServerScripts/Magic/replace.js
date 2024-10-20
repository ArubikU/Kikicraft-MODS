ServerEvents.tags("item", e => {
    e.add("forgenew:crops", [
        '#forge:vegetables',
        '#forge:fruits',
    ])
    e.add("forgenew:coffee_beans", [
        "croptopia:coffee_beans",
        "create:coffee_beans",
    ])
    e.add("ad_astra:polished_permafrost", [
        "ad_astra:polished_permafrost",
    ])
    e.add("ad_astra:polished_moon_stone", [
        "ad_astra:polished_moon_stone",
    ])
    e.add("forge:sand/moon_sand", [
        "ad_astra:moon_sand",
    ])
    e.add("forge:sandstone/venus_sandstone", [
        "ad_astra:venus_sandstone",
    ])
    e.add("forge:sand", [
        "ad_astra:moon_sand",
        "ad_astra:venus_sand",
    ])
    e.add("ad_astra:aeronos_stem", [
        "ad_astra:aeronos_stem",
    ])
    e.add("ad_astra:strophar_stem", [
        "ad_astra:strophar_stem",
    ])
    e.add("minecraft:log", [
        "#log",
    ])
    e.add("forge:ore_bearing_ground/moon_stone", [
        "ad_astra:moon_stone"
    ])
    e.add("minecraft:mushroom_hyphae", [
        "minecraft:mushroom_stem",
        "minecraft:brown_mushroom_block",
        "minecraft:red_mushroom_block"
    ])

    e.add("forgenew:ores/ice_shard", [
        "ad_astra:moon_ice_shard",
        "ad_astra:mars_ice_shard",
        "ad_astra:deepslate_ice_shard",
        "ad_astra:glacio_ice_shard",

    ])
    e.add("forgenew:ores", [
        "ad_astra:moon_ice_shard",
        "ad_astra:mars_ice_shard",
        "ad_astra:deepslate_ice_shard",
        "ad_astra:glacio_ice_shard",

    ])
})
ServerEvents.recipes(event => {
    // e.shapeless("ad_astra:astrodux", [
    //     "#ad_astra:steel_ingots",
    //     "minecraft:book"
    // ])
    //enderio:photovoltaic_plate
    //mekanismgenerators:solar_panel
    event.shaped(Item.of('patchouli:guide_book', '{"patchouli:book": "croptopia:guide"}'),
        ['AAA',
            'AB ',
            '   '],
        {
            A: '#forge:seeds',
            B: 'minecraft:book'
        }
    )

    event.shaped(Item.of('patchouli:guide_book', '{"patchouli:book": "croptopia:guide"}'),
        ['AAA',
            'AB ',
            '   '],
        {
            A: '#forgenew:crops',
            B: 'minecraft:book'
        }
    ).id("croptopia:documentation")
    event.shapeless("croptopia:coffee_seed", [
        "#forgenew:coffee_beans"
    ]).id("croptopia:coffee_seed")
    event.shapeless("croptopia:coffee", [
        "minecraft:glass_bottle",
        "#forgenew:coffee_beans",
        "croptopia:food_press"
    ]).keepIngredient("croptopia:food_press").id("croptopia:coffee")

    event.shaped("immersive_melodies:tiny_drum",
        ['AAA',
            'RBR',
            '   '],
        {
            A: 'minecraft:leather',
            R: "minecraft:string",
            B: "#log",
        }

    ).id("immersive_melodies:tiny_drum")

    event.shaped("mekanismgenerators:solar_panel",
        ['AAA',
            'RBR',
            'OOO'],
        {
            A: 'enderio:photovoltaic_plate',
            R: "minecraft:redstone",
            B: "mekanism:advanced_control_circuit",
            O: "#forge:ingots/osmium"
        }

    ).id("mekanismgenerators:solar_panel")

    
  e.recipes.create.mixing(['createaddition:biomass'], ['#forgenew:crops', Fluid.of('#forge:plant_oil', 100)]).heated()
  .id('createaddition:mixing/biomass_from_crops')

})

RecipeViewerEvents.addEntries('item', factory => {
    factory.add(Item.of('patchouli:guide_book', '{"patchouli:book": "croptopia:guide"}'));
})