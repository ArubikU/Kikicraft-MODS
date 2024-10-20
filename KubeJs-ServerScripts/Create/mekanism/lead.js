ServerEvents.recipes(e => {

    

    let ore="lead"
    let output="create:crushed_raw_lead"

    remove_recipes_output(e, [
        "mekanism:crystal_"+ore,
        "mekanism:shard_"+ore,
        "mekanism:clump_"+ore,
        "mekanism:dirty_dust_"+ore
    ])

    let block="#forge:ores/lead"

    e.recipes.create.milling(['mekanism:dirty_dust_'+ ore,
         Item.of('mekanism:crystal_'+ ore).withChance(0.6)], block)

         e.recipes.create.milling([Item.of('mekanism:dirty_dust_'+ ore).withChance(0.35),
            Item.of('mekanism:crystal_'+ ore).withChance(0.15), Item.of('create:experience_nugget').withChance(0.1)], "#tfmg:stone_types/galena")
    e.recipes.create.milling(['mekanism:dirty_dust_'+ ore,
         Item.of('mekanism:crystal_'+ ore).withChance(0.2), Item.of('create:experience_nugget').withChance(0.1)], "#forge:raw_materials/"+ore)
    e.recipes.create.mixing(['mekanism:shard_'+ ore
        , Item.of('mekanism:shard_'+ ore).withChance(0.5)], ['mekanism:crystal_'+ ore, "#forge:dusts/salt"])
    e.recipes.create.crushing(['mekanism:clump_'+ ore
        , Item.of('mekanism:clump_'+ ore).withChance(0.75)], 'mekanism:shard_'+ ore)
    e.recipes.create.sandpaper_polishing(['mekanism:dirty_dust_'+ ore
        , Item.of('mekanism:dirty_dust_'+ ore).withChance(0.3)], 'mekanism:clump_'+ ore)
    
  e.recipes.create.splashing(output, 'mekanism:dirty_dust_'+ ore)
})