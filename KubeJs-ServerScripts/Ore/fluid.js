ServerEvents.recipes(e => {

    
	//e.recipes.createoreexcavation.extracting('tfmg:crude_oil 100', 'tfmg:crude_oil_bucket', 10)
    //.fluid('tfmg:crude_oil').id("createoreexcavation:oil").drill('createoreexcavation:diamond_drill')
    //.biomeWhitelist("createdelight:has_oil")
    //.stress(512).veinSize(6, 10);
    //// 凛冰燃油开采
	//e.recipes.createoreexcavation.extracting('ad_astra:cryo_fuel 100', 'ad_astra:cryo_fuel_bucket', 10)
    //.biomeWhitelist("createdelight:has_cryo_fuel")
    //.fluid('ad_astra:cryo_fuel').id("createoreexcavation:oil").drill('createoreexcavation:netherite_drill')
    //.stress(1024).veinSize(6, 10);
})

ServerEvents.tags("minecraft:worldgen/biome", e => {
    e.add("createdelight:has_cryo_fuel", "ad_astra:glacio_ice_peaks")
    e.add("createdelight:has_oil", ["deeperdarker:overcast_columns", "deeperdarker:deeplands", "deeperdarker:echoing_forest"])
})