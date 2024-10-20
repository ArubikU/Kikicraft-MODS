ServerEvents.recipes(e => {
    remove_recipes_output(e, [
        "refinedstorage:raw_basic_processor",
        "refinedstorage:raw_improved_processor",
        "refinedstorage:raw_advanced_processor",
    ])
    // 处理器粘合物
    e.recipes.create.mixing("8x refinedstorage:processor_binding", [
        "#forge:slimeballs",
        Fluid.of("water 10"),
        "#forge:string"
    ])
        .heated()
        .id("refinedstorage:processor_binding")
    
    e.shapeless("refinedstorage:raw_basic_processor", [
        "refinedstorage:processor_binding",
        "#forge:plates/iron",
        "#forge:silicon",
        "create:rose_quartz"
    ])

    e.shapeless("refinedstorage:raw_improved_processor", [
        "refinedstorage:processor_binding",
        "#forge:plates/gold",
        "#forge:silicon",
        "create:rose_quartz"
    ])

    e.shapeless("refinedstorage:raw_advanced_processor", [
        "refinedstorage:processor_binding",
        "moremekanismprocessing:crystal_diamond",
        "#forge:silicon",
        "create:rose_quartz"
    ])

})
