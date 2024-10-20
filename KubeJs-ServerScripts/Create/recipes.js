ServerEvents.recipes(e => {



    e.recipes.create.crushing([
        'create:rose_quartz',
        Item.of('create:rose_quartz')
            .withChance(0.5),
        Item.of('create:experience_nugget')
            .withChance(0.75)
    ], 'biomesoplenty:rose_quartz_chunk')

    
    e.shapeless("4x biomesoplenty:rose_quartz_chunk", [
        "biomesoplenty:rose_quartz_block"
    ])

    e.shapeless("create:rose_quartz", [
        "4x redstone",
        "botania:quartz_mana"
    ])
    e.shapeless("4x quartz", [
        "quartz_block"
    ])

    
    e.shaped("4x create:shadow_steel_casing", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "create:shadow_steel",
        B: "create:andesite_casing"
    })
        .id("create:shadow_steel_casing")
        e.shaped("4x create:refined_radiance_casing", [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "create:refined_radiance",
            B: "create:andesite_casing"
        })
            .id("create:refined_radiance_casing")
})
