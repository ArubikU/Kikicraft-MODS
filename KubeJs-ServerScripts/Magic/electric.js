ServerEvents.recipes(event => {
    //机械手和电子管
    event.replaceInput(
        { output:"create:deployer" },
        'create:electron_tube',
        'create:polished_rose_quartz'
    )
    event.remove({id:"create:crafting/materials/electron_tube"})
    event.recipes.create.deploying('create:electron_tube', ['#forge:plates/brass', 'create:polished_rose_quartz'])

    //精密零件
    let inter = 'create:incomplete_precision_mechanism'
    event.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism').withChance(80.0),
        Item.of('#forge:plates/brass').withChance(10.0),
        Item.of('create:cogwheel').withChance(3.0),
        Item.of('create:large_cogwheel').withChance(3.0),
        Item.of('create:electron_tube').withChance(3.0),
        Item.of('supplementaries:ash').withChance(1.0)
    ], '#forge:plates/brass', [
        event.recipes.createDeploying(inter, [inter, 'create:cogwheel']),
        event.recipes.createDeploying(inter, [inter, 'create:large_cogwheel']),
        event.recipes.createDeploying(inter, [inter, '#blue_skies:gems/moonstone_shard']),
        event.recipes.createDeploying(inter, [inter, 'create:electron_tube']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(3).id('create:sequenced_assembly/precision_mechanism')

    //电池
    event.replaceInput(
        { output:"immersiveengineering:capacitor_lv" },
        '#forge:ingots/iron',
        '#forge:ingots/steel'
    )
    event.replaceInput(
        { output:"immersiveengineering:capacitor_mv" },
        '#forge:plates/nickel',
        '#forge:plates/electrum'
    )


    //限制热传导发电
    event.replaceInput(
        { output:"immersiveengineering:thermoelectric_generator" },
        'immersiveengineering:coil_lv',
        'immersiveengineering:coil_mv'
    )

})