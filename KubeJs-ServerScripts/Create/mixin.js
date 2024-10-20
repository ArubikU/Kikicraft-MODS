ServerEvents.recipes(e => {
  e.recipes.create.mixing([Fluid.water(10), 'slime_ball'], ['mekanism:bio_fuel', Fluid.of('createaddition:seed_oil', 50)]).superheated()
  e.recipes.create.compacting([Fluid.of('createaddition:seed_oil', 25)], ['#forge:seeds'])
  e.recipes.create.compacting([Fluid.of('createaddition:seed_oil', 50)], ['#forge:seeds']).heated()
  e.recipes.create.compacting([Fluid.of('createaddition:seed_oil', 75)], ['#forge:seeds']).superheated()
  })