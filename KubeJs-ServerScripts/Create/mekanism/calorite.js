ServerEvents.tags("item", e => {
    e.add("forge:ores/calorite", [
        'ad_astra:deepslate_calorite_ore',
        "ad_astra:venus_calorite_ore"
    ])
})
ServerEvents.recipes(e => {

    

    let ore="calorite"
    let output="create_ad_astra_compat:crushed_raw_calorite"

    remove_recipes_output(e, [
        "moremekanismprocessing:crystal_"+ore,
        "moremekanismprocessing:shard_"+ore,
        "moremekanismprocessing:clump_"+ore,
        "moremekanismprocessing:dirty_dust_"+ore
    ])

    let block="#forge:ores/calorite"

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
    
  e.recipes.create.splashing(output, 'moremekanismprocessing:dirty_dust_'+ ore)
})