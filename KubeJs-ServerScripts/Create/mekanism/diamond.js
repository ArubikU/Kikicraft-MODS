ServerEvents.tags("item", e => {
    e.add("forge:nuggets", [
        "born_in_chaos_v1:diamond_termite_shard"
    ])
})
ServerEvents.recipes(e => {

    let ore="diamond"
    let block="#minecraft:diamond_ores"

    e.recipes.create.milling(['moremekanismprocessing:clump_'+ ore,
         Item.of('moremekanismprocessing:crystal_'+ ore).withChance(0.6)], block)

        
    e.recipes.create.milling(['moremekanismprocessing:dirty_dust_'+ ore,
        Item.of('moremekanismprocessing:crystal_'+ ore).withChance(0.2), Item.of('create:experience_nugget').withChance(0.1)], "createoreexcavation:raw_diamond")

    e.recipes.create.mixing(['moremekanismprocessing:shard_'+ ore
        , Item.of('moremekanismprocessing:shard_'+ ore).withChance(0.5)], ['moremekanismprocessing:crystal_'+ ore, "#forge:dusts/salt"])
    e.recipes.create.crushing(['moremekanismprocessing:clump_'+ ore
        , Item.of('moremekanismprocessing:clump_'+ ore).withChance(0.75)], 'moremekanismprocessing:shard_'+ ore)
    e.recipes.create.sandpaper_polishing(['moremekanismprocessing:dirty_dust_'+ ore
        , Item.of('moremekanismprocessing:dirty_dust_'+ ore).withChance(0.3)], 'moremekanismprocessing:clump_'+ ore)
    
    
        e.shaped('minecraft:diamond', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'create_wt:diamond_nugget'
        }).id('create_wt:diamond')

        e.recipes.create.splashing("thermal:diamond_dust", 'moremekanismprocessing:dirty_dust_'+ ore)
        e.recipes.create.splashing(["9x create_wt:diamond_nugget",Item.of('mekanism:enriched_carbon').withChance(0.07)], 'thermal:diamond_dust')
})