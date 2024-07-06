craftingTable.addShaped("burning_ashes", <item:cataclysm:burning_ashes>, [
    [<item:minecraft:air>, <item:royalvariations:spiritual_crown>, <item:minecraft:air>], 
    [<item:minecraft:blaze_rod>, <item:minecraft:dragon_egg>, <item:minecraft:blaze_rod>], 
    [<item:minecraft:netherite_block>, <item:minecraft:lava_bucket>, <item:minecraft:netherite_block>]]);
craftingTable.addShaped("enchanted_golden_apple",<item:minecraft:enchanted_golden_apple>,[
    [<item:minecraft:gold_block>, <item:minecraft:gold_block>, <item:minecraft:gold_block>], 
    [<item:minecraft:gold_block>, <item:minecraft:apple>, <item:minecraft:gold_block>], 
    [<item:minecraft:gold_block>, <item:minecraft:gold_block>, <item:minecraft:gold_block>]]);

craftingTable.remove(<item:taxwl:warden_sword>);
craftingTable.remove(<item:taxwl:warden_axe>);

craftingTable.addShaped("warden_sword", <item:taxwl:warden_sword>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:taxwl:warden_scale>], 
    [<item:paraglider:spirit_orb>, <item:taxwl:warden_scale>, <item:minecraft:air>], 
    [<item:minecraft:netherite_sword>, <item:paraglider:spirit_orb>, <item:minecraft:air>]]);
craftingTable.addShaped("warden_axe", <item:taxwl:warden_axe>, [
    [<item:taxwl:warden_scale>, <item:taxwl:warden_scale>,<item:minecraft:air>], 
    [<item:taxwl:warden_scale>, <item:paraglider:spirit_orb>,<item:minecraft:air>], 
    [<item:minecraft:air>, <item:paraglider:spirit_orb>, <item:minecraft:air>]]);