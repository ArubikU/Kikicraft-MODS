ServerEvents.recipes(e => {
    // 替换配方：堆叠升级T1
    e.shaped("sophisticatedstorage:stack_upgrade_tier_1", [
        "ASA",
        "SBS",
        "ASA"
    ], {
        A: "minecraft:iron_nugget",
        S: "minecraft:string",
        B: "sophisticatedstorage:upgrade_base"
    })
        .id("sophisticatedstorage:stack_upgrade_tier_1")


        e.shaped("sophisticatedstorage:stack_upgrade_tier_1_plus", [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "minecraft:copper_ingot",
            B: "sophisticatedstorage:stack_upgrade_tier_1"
        })
            .id("sophisticatedstorage:stack_upgrade_tier_1_plus")

            



    // 替换配方：堆叠升级T2
    e.shaped("sophisticatedstorage:stack_upgrade_tier_2", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "minecraft:iron_ingot",
        B: "sophisticatedstorage:stack_upgrade_tier_1"
    })
        .id("sophisticatedstorage:stack_upgrade_tier_2")
    // 替换配方：堆叠升级T3
    e.shaped("sophisticatedstorage:stack_upgrade_tier_3", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "minecraft:gold_ingot",
        B: "sophisticatedstorage:stack_upgrade_tier_2"
    })
        .id("sophisticatedstorage:stack_upgrade_tier_3")
    // 替换配方：堆叠升级T4
    e.shaped("sophisticatedstorage:stack_upgrade_tier_4", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "minecraft:diamond",
        B: "sophisticatedstorage:stack_upgrade_tier_3"
    })
        .id("sophisticatedstorage:stack_upgrade_tier_4")

    
        e.shaped("sophisticatedstorage:stack_upgrade_tier_5", [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "minecraft:netherite_ingot",
            B: "sophisticatedstorage:stack_upgrade_tier_4"
        })
            .id("sophisticatedstorage:stack_upgrade_tier_5")

})