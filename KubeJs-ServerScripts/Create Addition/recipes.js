ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "createaddition:compacting/cake_base",
        "createaddition:compacting/seed_oil",
        "createaddition:mixing/bioethanol",
        "createaddition:crafting/capacitor_2",
        "createaddition:crafting/capacitor_1",
        "createaddition:rolling/brass_ingot",
        "createaddition:crafting/accumulator_conversion",
        "createaddition:crafting/large_connector_gold"
    ])
    // 电容合成
    e.recipes.minecraft.crafting_shaped("createaddition:capacitor", [
            " A ",
            " B ",
            " C "
        ], {
            A:'create:copper_sheet',
            B:'createaddition:zinc_sheet',
            C:'createaddition:copper_rod'
        }
    ).id("createaddition:crafting/capacitor")
    // 连接器合成
    e.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "tag": "forge:rods/electric"
            },
            {
                "item": "create:andesite_alloy"
            },
            {
                "item": "create:andesite_alloy"
            },
            {
                "tag": "forge:slimeballs"
            }
        ],
        "result":{
            "item": "createaddition:large_connector",
            "count": 2
        }
    }).id("createaddition:crafting/large_connector_electrum")
    //

    e.recipes.create.compacting('createaddition:modular_accumulator', 

        [
            'mekanism:energy_tablet',
            'createaddition:capacitor',
            'create:brass_casing',
            '#forge:wires/electric'
        ]
    
      ).heated().id("createaddition:crafting/modular_accumulator_gold")

    
  e.recipes.create.compacting('2x createaddition:modular_accumulator', 

    [
        'mekanism:energy_tablet',
        '2x createaddition:capacitor',
        'tfmg:steel_casing',
        '#forge:wires/electric'
    ]

  ).heated().id("createaddition:crafting/modular_accumulator_electrum")
})