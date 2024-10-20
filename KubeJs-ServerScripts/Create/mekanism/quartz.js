
ServerEvents.recipes(e => {

    let ore="quartz"
    let block="minecraft:nether_quartz_ore"

    e.recipes.create.milling(['moremekanismprocessing:clump_'+ ore,
         Item.of('moremekanismprocessing:crystal_'+ ore).withChance(0.2), Item.of('create:experience_nugget').withChance(0.1)], block)
    e.recipes.create.mixing(['moremekanismprocessing:shard_'+ ore
        , Item.of('moremekanismprocessing:shard_'+ ore).withChance(0.5)], ['moremekanismprocessing:crystal_'+ ore, "#forge:dusts/salt"])
    e.recipes.create.crushing(['moremekanismprocessing:clump_'+ ore
        , Item.of('moremekanismprocessing:clump_'+ ore).withChance(0.75)], 'moremekanismprocessing:shard_'+ ore)
    e.recipes.create.sandpaper_polishing(['moremekanismprocessing:dirty_dust_'+ ore
        , Item.of('moremekanismprocessing:dirty_dust_'+ ore).withChance(0.3)], 'moremekanismprocessing:clump_'+ ore)
    
  e.recipes.create.splashing( ["minecraft:quartz", Item.of("minecraft:prismarine_crystals")], 'moremekanismprocessing:dirty_dust_'+ ore)
})