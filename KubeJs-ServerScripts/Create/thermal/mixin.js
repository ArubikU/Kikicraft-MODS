ServerEvents.recipes(e => {
    e.recipes.create.mixing([Fluid.of('thermal:ender', 250)], ['ender_pearl']).heated()
    e.recipes.create.mixing([Fluid.of('thermal:ender', 100)], ['evilcraft:ender_tear']).heated()
    })