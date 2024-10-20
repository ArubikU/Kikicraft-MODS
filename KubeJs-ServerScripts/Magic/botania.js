ServerEvents.recipes(event => {

    event.recipes.botania.runic_altar("ars_nouveau:arcane_core", ["botania:manasteel_ingot", "botania:mana_pearl", "botania:mana_diamond", "elementalcraft:purecrystal", "ars_nouveau:source_gem", "botania:quartz_mana", "botania:mana_glass"], 5000)

    event.recipes.botania.mana_infusion("ars_nouveau:source_gem", "#forge:gems", 500)

    let inferium = "mysticalagriculture:inferium_essence"
    
    //修改白雏菊合成配方
    event.remove({ output: 'botania:pure_daisy' })

    event.recipes.botania.petal_apothecary('botania:pure_daisy', 
        [
            '#botania:petals/white',
            inferium,
            '#forge:ingots/tin'
        ]
    )

    //支持机械动力的活木、活石配方
    event.recipes.create.mixing(['botania:livingwood_log', Item.of('botania:pure_daisy').withChance(0.99)], ['#minecraft:logs','botania:pure_daisy']).heated()
    event.recipes.create.mixing(['botania:livingrock', Item.of('botania:pure_daisy').withChance(0.99)], ['minecraft:stone','botania:pure_daisy']).heated()


    
    event.recipes.botania.petal_apothecary('bloodmagic:lightritualstone', 
        [
            'bloodmagic:masterritualstone',
            'refinedstorage:advanced_processor',
            'immersiveengineering:component_electronic_adv'
        ]
    )
    event.recipes.botania.petal_apothecary('botania:black_lotus', 
        [
            'minecraft:lily_pad',
            'botania:black_mystical_flower',
            'botania:pixie_dust'
        ]
    )
    //暗黑莲花修改
    event.recipes.botania.petal_apothecary('botania:blacker_lotus', 
        [
            'botania:black_lotus',
            'evilcraft:blood_orb_filled',
            'tfmg:asphalt'
        ]

    )
    
    event.remove({ output: 'botania:mana_pool' })
    event.shaped(Item.of('botania:mana_pool',1),
        ['A A',
        'A A',
        'BCB'],
        {
            A:'botania:livingrock',
            B:'#forge:ingots/copper',
            C:'botania:livingwood'
        }
    )

    //修改恶魔南瓜配方
    event.remove({output:'botania:fel_pumpkin'})
    event.shaped(Item.of('botania:fel_pumpkin',1),
        ['ABA',
        'CDE',
        'AFA'],
        {
            A:'create:brass_nugget',
            B:'minecraft:string',
            C:'minecraft:rotten_flesh',
            D:'minecraft:pumpkin',
            E:'minecraft:gunpowder',
            F:'minecraft:bone'
        }
    )

    event.recipes.botania.mana_infusion('minecraft:pumpkin_seeds', 'minecraft:wheat_seeds', 100)
    event.recipes.botania.mana_infusion('minecraft:melon_seeds', 'minecraft:pumpkin_seeds', 100)
    event.recipes.botania.mana_infusion('minecraft:beetroot_seeds', 'minecraft:melon_seeds', 100)
    event.recipes.botania.mana_infusion('farmersdelight:cabbage_seeds', 'minecraft:beetroot_seeds', 100)
    event.recipes.botania.mana_infusion('farmersdelight:tomato_seeds', 'farmersdelight:cabbage_seeds', 100)
    event.recipes.botania.mana_infusion('immersiveengineering:seed', 'farmersdelight:tomato_seeds', 100)
    event.recipes.botania.mana_infusion('minecraft:wheat_seeds', 'immersiveengineering:seed', 100)

    //海带转化
    event.recipes.botania.mana_infusion('minecraft:kelp', '#minecraft:leaves', 500)
    
    //竹子转化
    event.recipes.botania.mana_infusion('minecraft:bamboo', 'botania:livingwood_twig', 500)

    
   // event.recipes.botania.mana_infusion('2x undergarden:forgotten_guardian_spawn_egg', 'undergarden:forgotten_guardian_spawn_egg', 50000,'botania:conjuration_catalyst')
    event.recipes.botania.mana_infusion('2x alexsmobs:spawn_egg_farseer', 'alexsmobs:spawn_egg_farseer', 50000,'botania:conjuration_catalyst')
    event.recipes.botania.mana_infusion('2x artifacts:mimic_spawn_egg', 'artifacts:mimic_spawn_egg', 25000,'botania:conjuration_catalyst')
    event.recipes.botania.mana_infusion('2x minecraft:shulker_spawn_egg', 'minecraft:shulker_spawn_egg', 50000,'botania:conjuration_catalyst')
    event.recipes.botania.mana_infusion('2x minecraft:wither_skeleton_spawn_egg', 'minecraft:wither_skeleton_spawn_egg', 25000,'botania:conjuration_catalyst')

    //龙皮复制
    //瞻远者蛋转化瞻远者之臂
    event.recipes.botania.mana_infusion('alexsmobs:farseer_arm', 'alexsmobs:spawn_egg_farseer', 50000,'botania:mana_bomb')

    
    event.remove({ output: 'botania:terra_plate' })
    event.shaped(Item.of('botania:terra_plate',1),
        ['ABA',
        'CDE',
        'FGH'],
        {
            A:'botania:manasteel_block',
            B:'illagerrevolutionmod:rune_table_block',
            C:'botania:rune_earth',
            D:'botania:elementium_block',
            E:'botania:rune_water',
            F:'botania:rune_fire',
            G:'botania:rune_mana',
            H:'botania:rune_air'
        }
    )

    
    event.replaceInput({mod:'botania',output:'botania:spark'},
        'minecraft:gold_nugget', 'botania:elementium_nugget' )
    
        //拉普达碎片I配方替换
        event.replaceInput({mod:'botania',output:'botania:laputa_shard'},
        'botania:dragonstone', 'botania:corporea_spark_master' )
        
        //自然水晶配方替换
        event.replaceInput({mod:'botania',output:'botania:natura_pylon'},
        'minecraft:ender_eye', 'minecraft:ender_pearl' )
        event.replaceInput({mod:'botania',output:'botania:natura_pylon'},
        'botania:terrasteel_nugget', 'create:brass_nugget' )
    
        //生命聚合器配方替换
        event.replaceInput({mod:'botania',output:'botania:spawner_mover'},
        'botania:elementium_ingot', 'botania:terrasteel_ingot' )

        
    event.replaceInput({mod:'botania',output:'botania:mana_gun'},
        'minecraft:tnt', 'botania:terrasteel_ingot' )
        event.replaceInput({mod:'botania',output:'botania:mana_gun'},
        'botania:redstone_spreader', 'bloodmagic:magicianbloodorb' )
        event.replaceInput({mod:'botania',output:'botania:mana_gun'},
        'botania:mana_diamond', 'create:precision_mechanism' )

        
        
    event.shaped(Item.of('botania:lens_storm',1),
    ['ABA',
    'CDC',
    'ABA'],
    {
        A:'botania:terrasteel_ingot',
        B:'botania:ender_air_bottle',
        C:'botania:dragonstone',
        D:'bloodmagic:magicianbloodorb'
    }
    )

    
    event.remove({output:'botania:terrasteel_ingot'})
    event.recipes.botania.terra_plate('botania:terrasteel_ingot', 
        [
            'botania:manasteel_ingot', 
            'botania:mana_pearl',
            'botania:mana_diamond',
            '#forge:ingots/brass',
        ], 
        50000
    )
    event.shaped(Item.of('botania:terrasteel_ingot',1),
    ['AAA',
    'AAA',
    'AAA'],
    {
        A:'botania:terrasteel_nugget'
    }
    )

    let citem = 'mekanism_extras:infinite_control_circuit';
    
    event.shaped(Item.of('blue_skies:astrolabe',1),
        ['ABA',
        'BCB',
        'ABA'],
        {
            A:'botania:dragonstone',
            B:'blue_skies:falsite_ingot',
            C:'blue_skies:star_flare'
        }
    )

    event.recipes.createMechanicalCrafting(Item.of('botania:mana_tablet', '{creative:1b,mana:500000}'), [
        ' SSSSS ',
        ' SASAS ',
        ' SDFDS ',
        ' SASAS ',
        ' SSSSS ',
      ], {
        S: citem,
        A: 'mekanism:pellet_antimatter',
        F: 'botania:mana_tablet',
        D: 'botania:terrasteel_block'
      })

      event.remove({id:'botania:mana_bomb'})

    event.recipes.botania.terra_plate('botania:mana_bomb',
        [
            'minecraft:tnt_minecart',
            'botania:gaia_ingot',
            'kubejs:frostfire_double_plate',
            'minecraft:conduit',
            'botania:dragonstone_block',
            'botania:corporea_spark'
        ],
        50000
    )
})