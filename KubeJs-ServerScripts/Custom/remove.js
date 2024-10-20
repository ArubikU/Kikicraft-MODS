ServerEvents.recipes(e => {
    remove_recipes_output(e, [
        "supplementaries:bomb",
        "refinedstorage:wrench",
        'supplementaries:bomb_spiky'
    ])

    remove_recipes_id(e, [
        "alexsmobs:flint_n_steel_dropbear_claw",
        "create:pressing/steel_ingot",
        "createaddition:pressing/steel_ingot",
    ])
})
