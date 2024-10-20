ServerEvents.recipes(event => {
    let e = event;
    let modid = "biggerreactors:"

    function id(internal){
        return modid+internal;
    }
    
    remove_recipes_output(event, [
        id("reactor_casing"),
        id('graphite_ingot')

    ])

    event.recipes.create.compacting(id('graphite_ingot'), [
        "#forge:ingots/steel",
        "#minecraft:coals"
    ])

    

    event.shaped(
        id('reactor_casing'),
        [
            'BCB',
            'CAC',
            'BCB'
        ],
        {
            C: id('graphite_ingot'),
            B: "#forge:plates/steel",
            A: "#forge:ingots/uranium"
        }
    )
})