ServerEvents.recipes(e => {

    e.recipes.create.filling('experience_bottle', [Fluid.of("enderio:xp_juice", 250), 'glass_bottle'])
    e.recipes.create.emptying([Fluid.of("enderio:xp_juice", 250), 'glass_bottle'], 'experience_bottle')
    e.recipes.create.emptying([Fluid.of("enderio:xp_juice", 100), 'create:zinc_ingot'], 'create:experience_nugget')
    let thermalplate = (plate) => {


        e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {
                "tag": 'forge:ingots/' + plate
            },
            "loops": 3,
            "results": [{
                "item": 'thermal:' + plate + '_plate'
            }],
            "sequence": [
                {
                    "type": "create:pressing",
                    "ingredients": [{
                        "tag": 'forge:ingots/' + plate
                    }],
                    "results": [{
                        "tag": 'forge:plates/' + plate
                    }]
                }
            ],
            "transitionalItem": {
                "item": 'thermal:' + plate + '_ingot'
            }
        })
            .id("thermal:machines/press/press_" + plate+"_ingot_to_plate")
    }

    let simplePlating = (plate) => {
        e.recipes.create.pressing('thermal:' + plate + '_plate', '#forge:ingots/' + plate).id('kikicraft:plating/' + plate)
    }

    thermalplate('enderium')
    thermalplate('lumium')
    thermalplate('signalum')
    thermalplate('invar')
    thermalplate('constantan')
    thermalplate('netherite')
    thermalplate('electrum')
    simplePlating('bronze')
    simplePlating('tin')
    simplePlating('rose_gold')

})