ServerEvents.recipes(event => {
  remove_recipes_output(event, [
      "mekanism:steel_casing",
      "mekanism:atomic_disassembler",
      "mekanism:jetpack",
      "mekanism:mekasuit_helmet",
      "mekanism:mekasuit_bodyarmor",
      "mekanism:mekasuit_pants",
      "mekanism:mekasuit_boots",
      "mekanism:meka_tool",
      "mekanism:configurator",
      "mekanism_extras:alloy_spectrum",
      "mekanism_extras:enriched_spectrum",
      "mekanism_extras:enriched_shining",
      "mekanism_extras:infinite_control_circuit",
      'mekanism:energy_tablet',

  ])
  event.shaped(
      Item.of('mekanism:energy_tablet', 1),
      [
          'ABA',
          'CBC',
          'ABA'
      ],
      {
          A: "#forge:dusts/redstone",
          B: "create:golden_sheet",
          C: "mekanism:alloy_infused"
      }
  )

    event.shaped(
        Item.of('mekanism:steel_casing', 2),
        [
            'SGS',
            'GBG',
            'SGS'
        ],
        {
            S: '#forge:plates/steel',
            B: 'create:brass_ingot',
            G: '#forge:glass'
        }
    )


    event.shaped(
        Item.of('mekanism:atomic_disassembler', 1),
        [
            'RER',
            'RAR',
            ' O '
        ],
        {
            E: 'mekanism:energy_tablet',
            R: 'mekanism:alloy_atomic',
            A: 'mekanism:pellet_polonium',
            O: 'mekanism:ingot_refined_obsidian'
        }
    )
    event.shaped('mekanism:jetpack', [
        'SSS',
        'ECE',
        ' S ',
    ], {
        E: 'ad_astra:steel_engine',
        S: '#forge:ingots/steel',
        C: 'mekanism:basic_chemical_tank'
    })

    
    event.recipes.createMechanicalCrafting('mekanism:mekasuit_helmet', [
        ' HUH ',
        ' HJH ',
        ' PAP ',
      ], {
        H: 'mekanism:hdpe_sheet',
        J: 'ad_astra:jet_suit_helmet',
        U: 'mekanism:ultimate_control_circuit',
        A: 'mekanism:basic_induction_cell',
        P: 'alexscaves:uranium_rod'
      })
      event.recipes.createMechanicalCrafting('mekanism:mekasuit_bodyarmor', [
        ' HUH ',
        ' HJH ',
        ' PAP ',
      ], {
        H: 'mekanism:hdpe_sheet',
        J: 'ad_astra:jet_suit',
        U: 'mekanism:ultimate_control_circuit',
        A: 'mekanism:basic_induction_cell',
        P: 'alexscaves:uranium_rod'
      })
      event.recipes.createMechanicalCrafting('mekanism:mekasuit_pants', [
        ' HUH ',
        ' HJH ',
        ' PAP ',
      ], {
        H: 'mekanism:hdpe_sheet',
        J: 'ad_astra:jet_suit_pants',
        U: 'mekanism:ultimate_control_circuit',
        A: 'mekanism:basic_induction_cell',
        P: 'alexscaves:uranium_rod'
      })
      event.recipes.createMechanicalCrafting('mekanism:mekasuit_boots', [
        ' HUH ',
        ' HJH ',
        ' PAP ',
      ], {
        H: 'mekanism:hdpe_sheet',
        J: 'ad_astra:jet_suit_boots',
        U: 'mekanism:ultimate_control_circuit',
        A: 'mekanism:basic_induction_cell',
        P: 'alexscaves:uranium_rod'
      })

      event.recipes.createMechanicalCrafting('mekanism:meka_tool', [
        ' UEU ',
        ' HDH ',
        ' PAP ',
      ], {
        H: 'mekanism:hdpe_sheet',
        D: 'mekanism:atomic_disassembler',
        U: 'mekanism:ultimate_control_circuit',
        A: 'mekanism:basic_induction_cell',
        P: 'alexscaves:uranium_rod',
        E: 'ad_astra:ostrum_plate'
      })

      event.shaped(
        Item.of('mekanism:configurator'),
        [ 
          ' L ', 
          ' R ',
          ' S '  
        ],
        {
          S: 'minecraft:stick',
          R: 'thermal:rf_coil',
          L: 'minecraft:lapis_lazuli'
        }
      )
      
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ad_astra:steel_rod"
        },
        "loops": 3,
        "results": [{
            "item": "alexscaves:uranium_rod",
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "alexscaves:uranium_rod"
            },
            [{
                "item": "mekanismgenerators:hohlraum"
            }]
            ],
            "results": [{
                "item": "alexscaves:uranium_rod"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "alexscaves:uranium_rod"
            },
            [{
                "tag": "forge:dusts/radiance"
            }]
            ],
            "results": [{
                "item": "alexscaves:uranium_rod"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "alexscaves:uranium_rod"
            },
            [{
                "item": "create_new_age:reactor_glass"
            }]
            ],
            "results": [{
                "item": "alexscaves:uranium_rod"
            }]
        },
        {
            "type": "create:filling",
            "ingredients": [
            {
                "item": "alexscaves:uranium_rod"
            },
            {
                "fluid": "mekanism:uranium_oxide",
                "nbt": {},
                "amount": 25
            }
            ],
            "results": [
            {
                "item": "alexscaves:uranium_rod"
            }
            ]
        },
        {
            "type": "create:pressing",
            "ingredients": [{
                "item": "alexscaves:uranium_rod"
            }],
            "results": [{
                "item": "alexscaves:uranium_rod"
            }]
        }
        ],
        "transitionalItem": {
            "item": "alexscaves:uranium_rod"
        }
    })
        .id("alexscaves:uranium_rod")
      
    event.recipes.create.mixing(
        [Fluid.of('mekanism:uranium_oxide',1000)], [Fluid.of('create_wt:molten_iron',500), 
            '#forge:ingots/uranium']).superheated()

    let citem = 'mekanism_extras:infinite_control_circuit';

    
    event.recipes.createMechanicalCrafting('create:creative_fluid_tank', [
        ' SSSSS ',
        ' SAAAS ',
        ' SAFAS ',
        ' SAAAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'create:fluid_tank'
      })
      
    event.recipes.createMechanicalCrafting('create:creative_blaze_cake', [
        ' SSSSS ',
        ' SAAAS ',
        ' SAFAS ',
        ' SAAAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'create:blaze_cake'
      })
      event.recipes.createMechanicalCrafting('create:creative_motor', [
        ' SSSSS ',
        ' SASAS ',
        ' SSFSS ',
        ' SASAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'createaddition:electric_motor'
      })

      event.recipes.createMechanicalCrafting('mekanism:creative_chemical_tank', [
        ' SSSSS ',
        ' SASAS ',
        ' SSFSS ',
        ' SASAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'mekanism:ultimate_chemical_tank'
      })
      event.recipes.createMechanicalCrafting('refinedstorage:creative_controller', [
        ' SSSSS ',
        ' SASAS ',
        ' SSFSS ',
        ' SASAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'refinedstorage:controller'
      })
      event.recipes.createMechanicalCrafting('refinedstorage:creative_storage_disk', [
        ' SSSSS ',
        ' SASAS ',
        ' SSFSS ',
        ' SASAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'refinedstorage:64k_storage_disk'
      })
      event.recipes.createMechanicalCrafting('refinedstorage:creative_fluid_storage_disk', [
        ' SSSSS ',
        ' SASAS ',
        ' SSFSS ',
        ' SASAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'refinedstorage:4096k_fluid_storage_disk'
      })
      event.recipes.createMechanicalCrafting('refinedstorage:creative_fluid_storage_disk', [
        ' SSSSS ',
        ' SASAS ',
        ' SSFSS ',
        ' SASAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'refinedstorage:4096k_fluid_storage_disk'
      })
      event.recipes.createMechanicalCrafting('refinedstorageaddons:creative_wireless_crafting_grid', [
        ' SSSSS ',
        ' SASAS ',
        ' SSFSS ',
        ' SASAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'refinedstorageaddons:wireless_crafting_grid'
      })
      event.recipes.createMechanicalCrafting('botania:creative_pool', [
        ' SSSSS ',
        ' SASAS ',
        ' SSFSS ',
        ' SASAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'botania:fabulous_pool'
      })

    event.shaped(
        Item.of('mekanism_extras:infinite_control_circuit', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'mekanism_extras:alloy_spectrum',
            B: 'mekanism_extras:cosmic_control_circuit'
        }
    )


    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "mekanism_extras:alloy_shining"
        },
        "loops": 100,
        "results": [{
            "item": "mekanism_extras:alloy_spectrum",
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "mekanism_extras:alloy_shining"
            },
            [{
                "item": "mekanism_extras:enriched_spectrum"
            }]
            ],
            "results": [{
                "item": "mekanism_extras:alloy_shining"
            }]
        },
        {
            "type": "create:pressing",
            "ingredients": [{
                "item": "mekanism_extras:alloy_shining"
            }],
            "results": [{
                "item": "mekanism_extras:alloy_shining"
            }]
        }
        ],
        "transitionalItem": {
            "item": "mekanism_extras:alloy_shining"
        }
    })
        .id("mekanism_extras:alloy_spectrum")
    event.recipes.create.mixing(['minecraft:netherite_scrap', Item.of('mekanism_extras:enriched_spectrum').withChance(0.1)], 'mekanism_extras:enriched_shining').superheated()
    event.recipes.create.crushing(Item.of('mekanism_extras:enriched_shining').withChance(0.0004), 'ad_astra:mercury_cobblestone')

    
    event.smithing(
        'thermal:upgrade_augment_2',
        'thermal:upgrade_augment_1',
        'thermal:electrum_plate'
      )
      event.smithing(
        'thermal:upgrade_augment_3',
        'thermal:upgrade_augment_2',
        'thermal:enderium_plate'
      )
      event.smithing(
        'mekanism:advanced_control_circuit',
        'mekanism:basic_control_circuit',
        'mekanism:alloy_infused'
      )
      event.smithing(
        'mekanism:elite_control_circuit',
        'mekanism:advanced_control_circuit',
        'mekanism:alloy_reinforced'
      )
      event.smithing(
        'mekanism:ultimate_control_circuit',
        'mekanism:elite_control_circuit',
        'mekanism:alloy_atomic'
      )
      event.smithing(
        'ad_astra:steel_tank',
        'minecraft:bucket',
        'ad_astra:steel_plate'
      )
      event.smithing(
        'ad_astra:desh_tank',
        'minecraft:bucket',
        'ad_astra:desh_plate'
      )
      event.smithing(
        'ad_astra:ostrum_tank',
        'minecraft:bucket',
        'ad_astra:ostrum_plate'
      )
      event.smithing(
        'ad_astra:calorite_tank',
        'minecraft:bucket',
        'ad_astra:calorite_plate'
      )
      
		  event.recipes.create.pressing('mekanism:dust_coal', 'minecraft:coal')
		  event.recipes.create.pressing('mekanism:dust_charcoal', 'minecraft:charcoal')
		  event.recipes.create.crushing('mekanism:dust_coal', 'minecraft:coal')
		  event.recipes.create.crushing('mekanism:dust_charcoal', 'minecraft:charcoal')
		  event.recipes.create.pressing('mekanism:dust_charcoal', 'minecraft:charcoal')
		  event.recipes.create.cutting('ad_astra:rocket_fin', 'ad_astra:steel_plate').processingTime(500)
		  event.recipes.create.deploying('mekanism:advanced_control_circuit', ['mekanism:basic_control_circuit', 'mekanism:alloy_infused'])
		  event.recipes.create.deploying('mekanism:elite_control_circuit', ['mekanism:advanced_control_circuit', 'mekanism:alloy_reinforced'])
		  event.recipes.create.deploying('mekanism:ultimate_control_circuit', ['mekanism:elite_control_circuit', 'mekanism:alloy_atomic'])
		  event.recipes.create.deploying('ad_astra:steel_tank', ['minecraft:bucket', 'ad_astra:steel_plate'])
		  event.recipes.create.deploying('ad_astra:desh_tank', ['minecraft:bucket', 'ad_astra:desh_plate'])
		  event.recipes.create.deploying('ad_astra:ostrum_tank', ['minecraft:bucket', 'ad_astra:ostrum_plate'])
		  event.recipes.create.deploying('ad_astra:calorite_tank', ['minecraft:bucket', 'ad_astra:calorite_plate'])
		  //event.recipes.create.mixing([Fluid.of('ad_astra:cryo_fuel', 250)], [Fluid.of('mekanism:hydrogen'), Fluid.of('mekanism:oxygen')])
		  event.recipes.create.mixing('4x thermal:signalum_ingot', ['minecraft:copper_ingot', 'minecraft:copper_ingot', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone', 'thermal:silver_ingot']).superheated()
		  event.recipes.create.mixing('2x thermal:enderium_ingot', ['mekanism:ingot_lead', 'mekanism:ingot_lead', 'mekanism:ingot_lead', 'minecraft:ender_pearl', 'minecraft:diamond']).superheated()
		  event.recipes.create.mixing('2x thermal:lumium_ingot', ['mekanism:ingot_tin', 'mekanism:ingot_tin', 'mekanism:ingot_tin', 'thermal:silver_ingot', 'minecraft:glowstone_dust', 'minecraft:glowstone_dust']).superheated()
		  event.recipes.create.mixing('2x thermal:invar_ingot', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'thermal:nickel_ingot']).heated()
		  event.recipes.create.mixing('3x mekanism:ingot_bronze', ['mekanism:ingot_tin', 'minecraft:copper_ingot', 'minecraft:copper_ingot',]).heated()
		  event.recipes.create.mixing('2x thermal:constantan_ingot', ['minecraft:copper_ingot', 'thermal:nickel_ingot',]).heated()
		  event.recipes.create.mixing('2x thermal:electrum_ingot', ['minecraft:gold_ingot', 'thermal:silver_ingot']).heated()
		  event.recipes.create.mixing('4x minecraft:coarse_dirt', ['minecraft:dirt', 'minecraft:gravel'])
		  event.recipes.create.mixing('4x minecraft:diorite', ['minecraft:quartz', 'minecraft:cobblestone']).heated()
		  event.recipes.create.haunting('coal', 'charcoal')
		  event.recipes.create.haunting('charcoal', 'coal')
		  event.recipes.create.haunting('netherrack', 'cobblestone')
		  event.recipes.create.haunting('blackstone', 'stone')
		  event.recipes.create.crushing('4x ad_astra:ice_shard', 'minecraft:blue_ice')
		  event.recipes.create.splashing('minecraft:blue_ice', 'minecraft:packed_ice')
		  event.recipes.create.deploying('create:electron_tube', ['create:polished_rose_quartz', 'minecraft:iron_nugget'])
		  event.recipes.create.deploying('create:electron_tube', ['minecraft:iron_nugget', 'create:polished_rose_quartz'])
		  event.recipes.create.filling('create:rose_quartz', [Fluid.of('thermal:redstone', 50), 'minecraft:quartz'])
		  event.recipes.create.mixing([Fluid.of('thermal:redstone', 100)], ['minecraft:redstone']).heated()
		  event.recipes.create.mixing('2x mekanism:alloy_reinforced', ['mekanism:alloy_infused', 'mekanism:enriched_diamond']).superheated()
		  event.recipes.create.mixing('mekanism:alloy_atomic', ['mekanism:alloy_reinforced', 'mekanism:enriched_refined_obsidian']).superheated()
		  event.recipes.create.compacting('minecraft:diamond', '9x mekanism:enriched_carbon').superheated()
		  event.recipes.create.mixing('3x ad_astra:steel_ingot', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', '#forge:dusts/coal']).heated()
		  event.recipes.create.crushing('ad_astra:mercury_cobblestone', 'ad_astra:mercury_stone')
		  event.recipes.create.splashing([Item.of('create:copper_nugget').withChance(0.15)], 'minecraft:sand')
		  event.recipes.create.mixing(['2x minecraft:redstone', Item.of('minecraft:redstone').withChance(0.2), Item.of('create:experience_nugget').withChance(0.1)], ['minecraft:nether_wart', 'create:cinder_flour', 'mekanism:dust_copper']).heated()
		  event.recipes.create.crushing([Item.of('create:zinc_nugget').withChance(0.1), Item.of('mekanism:nugget_uranium').withChance(0.001)], 'minecraft:stone')
})