ServerEvents.recipes(e => {

    

    let ore="lithium"
    let output="create:crushed_raw_lithium"

    remove_recipes_output(e, [
        "moremekanismprocessing:crystal_"+ore,
        "moremekanismprocessing:shard_"+ore,
        "moremekanismprocessing:clump_"+ore,
        "moremekanismprocessing:dirty_dust_"+ore
    ])

    let block="#forge:ores/lithium"

    e.recipes.create.milling(['moremekanismprocessing:dirty_dust_'+ ore,
         Item.of('moremekanismprocessing:crystal_'+ ore).withChance(0.6)], block)

    e.recipes.create.milling(['moremekanismprocessing:dirty_dust_'+ ore,
         Item.of('moremekanismprocessing:crystal_'+ ore).withChance(0.2), Item.of('create:experience_nugget').withChance(0.1)], "#forge:raw_materials/"+ore)
    e.recipes.create.mixing(['moremekanismprocessing:shard_'+ ore
        , Item.of('moremekanismprocessing:shard_'+ ore).withChance(0.5)], ['moremekanismprocessing:crystal_'+ ore, "#forge:dusts/salt"])
    e.recipes.create.crushing(['moremekanismprocessing:clump_'+ ore
        , Item.of('moremekanismprocessing:clump_'+ ore).withChance(0.75)], 'moremekanismprocessing:shard_'+ ore)
    e.recipes.create.sandpaper_polishing(['moremekanismprocessing:dirty_dust_'+ ore
        , Item.of('moremekanismprocessing:dirty_dust_'+ ore).withChance(0.3)], 'moremekanismprocessing:clump_'+ ore)
    
  e.recipes.create.splashing(["mekanism:dust_lithium"], 'moremekanismprocessing:dirty_dust_'+ ore)
  e.recipes.create.splashing(["9x moremekanismprocessing:lithium_nugget", Item.of("thermal:sulfur_dust").withChance(0.75)], 'mekanism:dust_lithium')
  
e.recipes.create.compacting(Fluid.of('mekanism:lithium',1000), '#forge:ingots/lithium').heated()
e.recipes.create.compacting(Fluid.of('mekanism:lithium',1000), '#forge:raw_materials/lithium').heated()
e.recipes.create.compacting(Fluid.of('mekanism:lithium',1000), '#forge:dusts/lithium').heated()


        e.shaped('tfmg:lithium_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: '#forge:ingots/lithium'
        }).id('tfmg:crafting/lithium_block')
})