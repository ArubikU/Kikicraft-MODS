ServerEvents.recipes(e => {

    

    let ore="aluminum"
    let block = "#forge:ores/aluminum"
    let output="create:crushed_raw_aluminum"

    remove_recipes_output(e, [
        "moremekanismprocessing:crystal_"+ore,
        "moremekanismprocessing:shard_"+ore,
        "moremekanismprocessing:clump_"+ore,
        "moremekanismprocessing:dirty_dust_"+ore
    ])

    e.recipes.create.milling(['moremekanismprocessing:dirty_dust_'+ ore,
        Item.of('moremekanismprocessing:crystal_'+ ore).withChance(0.6)], block)

   e.recipes.create.milling(['moremekanismprocessing:dirty_dust_'+ ore,
        Item.of('moremekanismprocessing:crystal_'+ ore).withChance(0.2), Item.of('create:experience_nugget').withChance(0.1)], "#forge:raw_materials/"+ore)

    e.recipes.create.milling([Item.of('moremekanismprocessing:dirty_dust_'+ ore).withChance(0.5),
         Item.of('moremekanismprocessing:crystal_'+ ore).withChance(0.2), Item.of('create:experience_nugget').withChance(0.1)], "tfmg:stone_types/bauxite")

    e.recipes.create.mixing(['moremekanismprocessing:shard_'+ ore
        , Item.of('moremekanismprocessing:shard_'+ ore).withChance(0.5)], ['moremekanismprocessing:crystal_'+ ore, "#forge:dusts/salt"])
    e.recipes.create.crushing(['moremekanismprocessing:clump_'+ ore
        , Item.of('moremekanismprocessing:clump_'+ ore).withChance(0.75)], 'moremekanismprocessing:shard_'+ ore)
    e.recipes.create.sandpaper_polishing(['moremekanismprocessing:dirty_dust_'+ ore
        , Item.of('moremekanismprocessing:dirty_dust_'+ ore).withChance(0.3)], 'moremekanismprocessing:clump_'+ ore)
    
  e.recipes.create.splashing(output, 'moremekanismprocessing:dirty_dust_'+ ore)
  e.recipes.create.splashing("9x moremekanismprocessing:"+ore+"_nugget", output)
})