ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "refinedstorage:1k_storage_disk",
        "refinedstorage:4k_storage_disk",
        "refinedstorage:16k_storage_disk",
        "refinedstorage:64k_storage_disk",
        "refinedstorage:64k_fluid_storage_disk",
        "refinedstorage:256k_fluid_storage_disk",
        "refinedstorage:1024k_fluid_storage_disk",
        "refinedstorage:4096k_fluid_storage_disk",
    ])

    e.recipes.create.sequenced_assembly("refinedstorage:machine_casing", "#forge:stone", [
        e.recipes.create.deploying("#forge:stone", ["#forge:stone", "refinedstorage:quartz_enriched_iron"])
    ])
        .transitionalItem("#forge:stone")
        .loops(8)
        .id("refinedstorage:machine_casing")

    // 存储外壳合成
    e.recipes.create.sequenced_assembly("refinedstorage:storage_housing", "#forge:glass", [
        e.recipes.create.deploying("refinedstorage:storage_housing", ["refinedstorage:storage_housing", "#forge:dusts/redstone"]),
        e.recipes.create.deploying("refinedstorage:storage_housing", ["refinedstorage:storage_housing", "refinedstorage:quartz_enriched_iron"]),
        e.recipes.create.pressing("refinedstorage:storage_housing", "refinedstorage:storage_housing")
    ])
        .transitionalItem("refinedstorage:storage_housing")
        .loops(3)
        .id("refinedstorage:storage_housing")
    // 序列合成：1K存储元件





    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "refinedstorage:quartz_enriched_iron"
        },
        "loops": 3,
        "results": [{
            "item": "refinedstorage:1k_storage_part"
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:1k_storage_part"
            },
            [{
                "item": "refinedstorage:silicon"
            }]
            ],
            "results": [{
                "item": "refinedstorage:1k_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:1k_storage_part"
            },
            [{
                "tag": "forge:dusts/redstone"
            }]
            ],
            "results": [{
                "item": "refinedstorage:1k_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:1k_storage_part"
            },
            [{
                "tag": "forge:glass"
            }]
            ],
            "results": [{
                "item": "refinedstorage:1k_storage_part"
            }]
        },

        {
            "type": "create:filling",
            "ingredients": [
                {
                    "item": "refinedstorage:1k_storage_part"
                },
                {
                    "fluid": "mekanism:lithium",
                    "nbt": {},
                    "amount": 100
                }
            ],
            "results": [
                {
                    "item": "refinedstorage:1k_storage_part"
                }
            ]
        },
        {
            "type": "create:pressing",
            "ingredients": [{
                "item": "refinedstorage:1k_storage_part"
            }],
            "results": [{
                "item": "refinedstorage:1k_storage_part"
            }]
        }
        ],
        "transitionalItem": {
            "item":  "refinedstorage:quartz_enriched_iron" //"refinedstorage:1k_storage_part"
        }
    })
        .id("refinedstorage:1k_storage_part")
    // 4K存储元件合成
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "refinedstorage:quartz_enriched_iron"
        },
        "loops": 3,
        "results": [{
            "item": "refinedstorage:4k_storage_part"
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:4k_storage_part"
            },
            [{
                "item": "refinedstorage:basic_processor"
            }]
            ],
            "results": [{
                "item": "refinedstorage:4k_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:4k_storage_part"
            },
            [{
                "tag": "forge:dusts/redstone"
            }]
            ],
            "results": [{
                "item": "refinedstorage:4k_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:4k_storage_part"
            },
            [{
                "item": "refinedstorage:1k_storage_part"
            }]
            ],
            "results": [{
                "item": "refinedstorage:4k_storage_part"
            }]
        },
        {
            "type": "create:filling",
            "ingredients": [
                {
                    "item": "refinedstorage:4k_storage_part"
                },
                {
                    "fluid": "mekanism:lithium",
                    "nbt": {},
                    "amount": 100
                }
            ],
            "results": [
                {
                    "item": "refinedstorage:4k_storage_part"
                }
            ]
        },
        {
            "type": "create:pressing",
            "ingredients": [{
                "item": "refinedstorage:4k_storage_part"
            }],
            "results": [{
                "item": "refinedstorage:4k_storage_part"
            }]
        }
        ],
        "transitionalItem": {
            "item":  "refinedstorage:quartz_enriched_iron" //"refinedstorage:4k_storage_part"
        }
    })
        .id("refinedstorage:4k_storage_part")
    // 16K存储元件合成
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "refinedstorage:quartz_enriched_iron"
        },
        "loops": 3,
        "results": [{
            "item": "refinedstorage:16k_storage_part"
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:16k_storage_part"
            },
            [{
                "item": "refinedstorage:improved_processor"
            }]
            ],
            "results": [{
                "item": "refinedstorage:16k_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:16k_storage_part"
            },
            [{
                "tag": "forge:dusts/redstone"
            }]
            ],
            "results": [{
                "item": "refinedstorage:16k_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:16k_storage_part"
            },
            [{
                "item": "refinedstorage:4k_storage_part"
            }]
            ],
            "results": [{
                "item": "refinedstorage:16k_storage_part"
            }]
        },
        {
            "type": "create:filling",
            "ingredients": [
                {
                    "item": "refinedstorage:16k_storage_part"
                },
                {
                    "fluid": "mekanism:lithium",
                    "nbt": {},
                    "amount": 100
                }
            ],
            "results": [
                {
                    "item": "refinedstorage:16k_storage_part"
                }
            ]
        },
        {
            "type": "create:pressing",
            "ingredients": [{
                "item": "refinedstorage:16k_storage_part"
            }],
            "results": [{
                "item": "refinedstorage:16k_storage_part"
            }]
        }
        ],
        "transitionalItem": {
            "item":  "refinedstorage:quartz_enriched_iron" //"refinedstorage:16k_storage_part"
        }
    })
        .id("refinedstorage:16k_storage_part")
    // 64K存储元件合成
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "refinedstorage:quartz_enriched_iron"
        },
        "loops": 3,
        "results": [{
            "item": "refinedstorage:64k_storage_part"
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:64k_storage_part"
            },
            [{
                "item": "refinedstorage:advanced_processor"
            }]
            ],
            "results": [{
                "item": "refinedstorage:64k_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:64k_storage_part"
            },
            [{
                "tag": "forge:dusts/redstone"
            }]
            ],
            "results": [{
                "item": "refinedstorage:64k_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:64k_storage_part"
            },
            [{
                "item": "refinedstorage:16k_storage_part"
            }]
            ],
            "results": [{
                "item": "refinedstorage:64k_storage_part"
            }]
        },
        {
            "type": "create:filling",
            "ingredients": [
                {
                    "item": "refinedstorage:64k_storage_part"
                },
                {
                    "fluid": "mekanism:lithium",
                    "nbt": {},
                    "amount": 100
                }
            ],
            "results": [
                {
                    "item": "refinedstorage:64k_storage_part"
                }
            ]
        },
        {
            "type": "create:pressing",
            "ingredients": [{
                "item": "refinedstorage:64k_storage_part"
            }],
            "results": [{
                "item": "refinedstorage:64k_storage_part"
            }]
        }
        ],
        "transitionalItem": {
            "item":  "refinedstorage:quartz_enriched_iron" //"refinedstorage:64k_storage_part"
        }
    })
        .id("refinedstorage:64k_storage_part")


    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "refinedstorage:quartz_enriched_iron"
        },
        "loops": 3,
        "results": [{
            "item": "refinedstorage:64k_fluid_storage_part"
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:64k_fluid_storage_part"
            },
            [{
                "item": "refinedstorage:silicon"
            }]
            ],
            "results": [{
                "item": "refinedstorage:64k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:64k_fluid_storage_part"
            },
            [{
                "tag": "forge:silicon"
            }]
            ],
            "results": [{
                "item": "refinedstorage:64k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:64k_fluid_storage_part"
            },
            [{
                "tag": "forge:glass"
            }]
            ],
            "results": [{
                "item": "refinedstorage:64k_fluid_storage_part"
            }]
        },

        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:64k_fluid_storage_part"
            },
            [{
                "tag": "forge:plates/iron"
            }]
            ],
            "results": [{
                "item": "refinedstorage:64k_fluid_storage_part"
            }]
        },
        {
            "type": "create:pressing",
            "ingredients": [{
                "item": "refinedstorage:64k_fluid_storage_part"
            }],
            "results": [{
                "item": "refinedstorage:64k_fluid_storage_part"
            }]
        }
        ],
        "transitionalItem": {
            "item":  "refinedstorage:quartz_enriched_iron" //"refinedstorage:64k_fluid_storage_part"
        }
    })
        .id("refinedstorage:64k_fluid_storage_part")


    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "refinedstorage:quartz_enriched_iron"
        },
        "loops": 3,
        "results": [{
            "item": "refinedstorage:256k_fluid_storage_part"
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:256k_fluid_storage_part"
            },
            [{
                "item": "refinedstorage:64k_fluid_storage_part"
            }]
            ],
            "results": [{
                "item": "refinedstorage:256k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:256k_fluid_storage_part"
            },
            [{
                "tag": "forge:silicon"
            }]
            ],
            "results": [{
                "item": "refinedstorage:256k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:256k_fluid_storage_part"
            },
            [{
                "tag": "forge:glass"
            }]
            ],
            "results": [{
                "item": "refinedstorage:256k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:256k_fluid_storage_part"
            },
            [{
                "tag": "forge:plates/iron"
            }]
            ],
            "results": [{
                "item": "refinedstorage:256k_fluid_storage_part"
            }]
        },
        {
            "type": "create:pressing",
            "ingredients": [{
                "item": "refinedstorage:256k_fluid_storage_part"
            }],
            "results": [{
                "item": "refinedstorage:256k_fluid_storage_part"
            }]
        }
        ],
        "transitionalItem": {
            "item":  "refinedstorage:quartz_enriched_iron" //"refinedstorage:256k_fluid_storage_part"
        }
    })
        .id("refinedstorage:256k_fluid_storage_part")

    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "refinedstorage:quartz_enriched_iron"
        },
        "loops": 3,
        "results": [{
            "item": "refinedstorage:1024k_fluid_storage_part"
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            },
            [{
                "item": "refinedstorage:256k_fluid_storage_part"
            }]
            ],
            "results": [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            },
            [{
                "tag": "forge:silicon"
            }]
            ],
            "results": [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            },
            [{
                "tag": "forge:glass"
            }]
            ],
            "results": [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            },
            [{
                "tag": "forge:plates/iron"
            }]
            ],
            "results": [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            }]
        },
        {
            "type": "create:pressing",
            "ingredients": [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            }],
            "results": [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            }]
        }
        ],
        "transitionalItem": {
            "item":  "refinedstorage:quartz_enriched_iron" //"refinedstorage:1024k_fluid_storage_part"
        }
    })
        .id("refinedstorage:1024k_fluid_storage_part")


    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "refinedstorage:quartz_enriched_iron"
        },
        "loops": 3,
        "results": [{
            "item": "refinedstorage:4096k_fluid_storage_part"
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:4096k_fluid_storage_part"
            },
            [{
                "item": "refinedstorage:1024k_fluid_storage_part"
            }]
            ],
            "results": [{
                "item": "refinedstorage:4096k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:4096k_fluid_storage_part"
            },
            [{
                "tag": "forge:silicon"
            }]
            ],
            "results": [{
                "item": "refinedstorage:4096k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:4096k_fluid_storage_part"
            },
            [{
                "tag": "forge:glass"
            }]
            ],
            "results": [{
                "item": "refinedstorage:4096k_fluid_storage_part"
            }]
        },
        {
            "type": "create:deploying",
            "ingredients": [{
                "item": "refinedstorage:4096k_fluid_storage_part"
            },
            [{
                "tag": "forge:plates/iron"
            }]
            ],
            "results": [{
                "item": "refinedstorage:4096k_fluid_storage_part"
            }]
        },
        {
            "type": "create:pressing",
            "ingredients": [{
                "item": "refinedstorage:4096k_fluid_storage_part"
            }],
            "results": [{
                "item": "refinedstorage:4096k_fluid_storage_part"
            }]
        }
        ],
        "transitionalItem": {
            "item":  "refinedstorage:quartz_enriched_iron" //"refinedstorage:4096k_fluid_storage_part"
        }
    })
        .id("refinedstorage:4096k_fluid_storage_part")


    let EnrichedBrass = Item.of("refinedstorage:quartz_enriched_iron").withName("§fLatón enriquecido con cuarzo")
    let EnrichedBrassBlock = Item.of("refinedstorage:quartz_enriched_iron_block").withName("§fBloque de Latón enriquecido con cuarzo")



    e.shapeless("refinedstorage:quartz_enriched_iron", [
        "create:brass_ingot",
        "create:brass_ingot",
        "create:brass_ingot",
        "minecraft:quartz",
    ]).id("refinedstorage:quartz_enriched_iron")



    e.recipes.create.compacting("refinedstorage:quartz_enriched_iron", [
        "minecraft:quartz",
        "create:brass_ingot",
    ])
        .heated()

    e.replaceInput(
        { output: "refinedstorage:quartz_enriched_iron" }, // Arg 1: the filter
        'minecraft:iron_ingot',            // Arg 2: the item to replace
        'create:brass_ingot'         // Arg 3: the item to replace it with
    )


    e.replaceInput(
        {}, // Arg 1: the filter
        'refinedstorage:quartz_enriched_iron',            // Arg 2: the item to replace
        EnrichedBrass         // Arg 3: the item to replace it with
    )
    e.replaceOutput(
        {}, // Arg 1: the filter
        'refinedstorage:quartz_enriched_iron',            // Arg 2: the item to replace
        EnrichedBrass         // Arg 3: the item to replace it with
    )

    e.replaceInput(
        {}, // Arg 1: the filter
        'refinedstorage:quartz_enriched_iron_block',            // Arg 2: the item to replace
        EnrichedBrassBlock         // Arg 3: the item to replace it with
    )
    e.replaceOutput(
        {}, // Arg 1: the filter
        'refinedstorage:quartz_enriched_iron_block',            // Arg 2: the item to replace
        EnrichedBrassBlock         // Arg 3: the item to replace it with
    )
})
