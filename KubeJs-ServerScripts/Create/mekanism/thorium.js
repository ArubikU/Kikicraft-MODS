ServerEvents.recipes(e => {

    e.recipes.create.milling([Item.of('create_new_age:radioactive_thorium').withChance(0.15),
        Item.of("create:crushed_raw_iron").withChance(0.4),
         Item.of('create:experience_nugget').withChance(0.6)], 'create_new_age:thorium')
})