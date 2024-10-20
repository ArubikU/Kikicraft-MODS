ServerEvents.recipes(e => {
    // 移除配方：ad_astra
    remove_recipes_output(e, [
        "ad_astra:compressor",
        "ad_astra:coal_generator",
        "ad_astra:cable_duct",
        "ad_astra:ostrum_fluid_pipe",
        "ad_astra:desh_cable",
        "ad_astra:steel_cable",
        "ad_astra:desh_fluid_pipe",
        "ad_astra:fluid_pipe_duct",
        "ad_astra:water_pump",
        "ad_astra:nasa_workbench",
        "ad_astra:wrench",
        'ad_astra:steel_plate',
        'ad_astra:fan',
        "ad_astra:ostrum_engine",
        "ad_astra:calorite_engine"
    ])
    remove_recipes_id(e, [
        "ad_astra:steel_ingot_from_blasting_iron_ingot",
        "ad_astra:steel_ingot_from_nuggets",
        "ad_astra:steel_block",
        "ad_astra:steel_ingot",
        "ad_astra:engine_frame",
        "ad_astra:ostrum_tank",
        "ad_astra:ostrum_engine",
        "ad_astra:calorite_tank",
        "ad_astra:calorite_engine",
        "ad_astra:conversion/cryo_fuel_from_packed_ice",
        "ad_astra:conversion/cryo_fuel_from_blue_ice",
        "ad_astra:conversion/cryo_fuel_from_ice",
    ])

    // 新增配方：银河系漫游指南
   // e.shapeless("ad_astra:astrodux", [
   //     "#ad_astra:steel_ingots",
   //     "minecraft:book"
   // ])
   //     .id("ad_astra:astrodux")
    // 新增配方：霜原木
    e.shapeless("ad_astra:glacian_log", [
        "#minecraft:logs",
        "ad_astra:ice_shard"
    ])
    // 新增配方：霜原树叶
    e.shapeless("ad_astra:glacian_leaves", [
        "#minecraft:leaves",
        "ad_astra:ice_shard"
    ])
    // 替换配方：喷气式航天服
    e.shaped("ad_astra:jet_suit", [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "ad_astra:calorite_plate",
        B: "mekanism:jetpack",
        C: "ad_astra:calorite_tank",
        D: "ad_astra:netherite_space_suit",
        E: "ad_astra:calorite_block",
        F: "ad_astra:calorite_engine"
    })
        .id("ad_astra:jet_suit")
    //替换配方：氧气罐
    e.shaped('ad_astra:gas_tank', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: '#forge:plates/steel',
        B: '#rods/iron',
        C: 'create:fluid_tank'
    }).id('ad_astra:gas_tank')
    //替换配方：引擎框架
    e.shaped('ad_astra:engine_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:rods/iron',
        B: 'create:precision_mechanism'
    }).id('ad_astra:engine_frame')
    //替换配方：引擎风扇
    e.shaped('ad_astra:fan', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:plates/steel',
        B: 'create:propeller'
    }).id('ad_astra:engine_fan')
    //替换配方：钢燃料储罐
    e.shaped('ad_astra:steel_tank', [
        'AA ',
        'ABC',
        'AA '
    ], {
        A: '#forge:plates/steel',
        B: 'create:fluid_tank',
        C: '#forge:rods/iron'
    }).id('ad_astra:steel_tank')
    //替换配方：戴斯燃料储罐
    e.shaped('ad_astra:desh_tank', [
        'AA ',
        'ABC',
        'AA '
    ], {
        A: 'ad_astra:desh_plate',
        B: 'create:fluid_tank',
        C: '#forge:rods/iron'
    }).id('ad_astra:desh_tank')
    //替换配方：紫金燃料储罐
    e.shaped('ad_astra:ostrum_tank', [
        'AA ',
        'ABC',
        'AA '
    ], {
        A: 'ad_astra:ostrum_plate',
        B: 'create:fluid_tank',
        C: '#forge:rods/iron'
    }).id('ad_astra:ostrum_tank')
    //替换配方：耐热燃料储罐
    e.shaped('ad_astra:calorite_tank', [
        'AA ',
        'ABC',
        'AA '
    ], {
        A: 'ad_astra:calorite_plate',
        B: 'create:fluid_tank',
        C: '#forge:rods/iron'
    }).id('ad_astra:calorite_tank')
    //替换配方：充能器
    e.shaped('ad_astra:energizer', [
        'ABA',
        'ACA',
        'DAD'
    ], {
        A: 'ad_astra:ostrum_plate',
        B: 'create:depot',
        C: 'createaddition:tesla_coil',
        D: 'mekanism:energy_tablet'
    }).id('ad_astra:energizer')
    //替换配方：凛冰冻结装置
    e.shaped('ad_astra:cryo_freezer', [
        'ABA',
        'BCB',
        'DBD'
    ], {
        A: 'ad_astra:fan',
        B: 'ad_astra:ostrum_ingot',
        C: 'ad_astra:ostrum_tank',
        D: 'mekanism:energy_tablet'
    }).id('ad_astra:cryo_freezer')
    //替换配方：氧气装载机
    e.shaped('ad_astra:oxygen_loader', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:plates/steel',
        B: 'ad_astra:fan',
        C: 'ad_astra:oxygen_tank',
        D: 'minecraft:lightning_rod',
        E: 'mekanism:energy_tablet'
    }).id('ad_astra:oxygen_loader')
    //替换配方：燃油精炼机
    e.shaped('ad_astra:fuel_refinery', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#forge:plates/steel',
        B: 'create:fluid_tank',
        C: 'mekanism:energized_smelter'
    }).id('ad_astra:fuel_refinery')
    //替换配方：太阳能板
    e.shaped('ad_astra:solar_panel', [
        'AAA',
        'BCB',
        'CDC'
    ], {
        A: 'mekanismgenerators:solar_panel',
        B: '#forge:plates/steel',
        C: 'ad_astra:desh_plate',
        D: 'mekanism:energy_tablet'
    }).id('ad_astra:solar_panel')
    //替换配方：紫金引擎
    e.shaped('ad_astra:ostrum_engine', [
        'ABA',
        ' C ',
        ' D '
    ], {
        A: 'ad_astra:ostrum_plate',
        B: 'alexscaves:fissile_core',
        C: 'ad_astra:engine_frame',
        D: 'ad_astra:fan'
    }).id('ad_astra:ostrum_engine')
    //替换配方：耐热金属引擎
    e.shaped('ad_astra:calorite_engine', [
        'ABA',
        ' C ',
        ' D '
    ], {
        A: 'ad_astra:calorite_plate',
        B: 'ad_astra:ostrum_engine',
        C: 'ad_astra:engine_frame',
        D: 'ad_astra:fan'
    }).id('ad_astra:calorite_engine')
    // 混合燃料
})
