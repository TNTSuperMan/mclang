export type Arbitrary<T extends object> = {
    [key in keyof T]?: T[key];
}
export type Coordinate = {
    x: number,
    y: number,
    z: number
}
export const enum Gamemode{
    Spectator= "spectator",
    Survival= "survival",
    Creative= "creative",
    Adventure= "adventure",
    Default= "default"
}
export const enum Entity{
    Player= "player",
    ArmorStand= "armor_stand",
    Arrow= "arrow",
    Boat= "boat",
    BoatWithChest= "chest_boat",
    Egg= "egg",
    EndCrystal= "end_crystal",
    EnderPearl= "ender_pearl",
    EvokerFangs= "evoker_fangs",
    EyeOfEnder= "eye_of_ender",
    ExperienceOrb= "experience_orb",
    FallingBlock= "falling_block",
    FishingBobber= "fishing_bobber",
    Fireball= "fireball",
    SmallFireBall= "small_fireball",
    DragonFireball= "dragon_fireball",
    FireworkRocket= "fireworks_rocket",
    Interation= "interation",
    Item= "item",
    ItemDisplay= "item_display",
    ItemFrame= "item_frame",
    GlowItemFrame= "glow_item_frame",
    LightningBolt= "lightning_bolt",
    LeashKnot= "leash_knot",
    LlamaSpit= "llama_spit",
    Marker= "marker",
    Minecart= "minecart",
    MinecartWithChest= "chest_minecart",
    MinecartWithCommandBlock= "command_block_minecart",
    MinecartWithFurnace= "furnace_minecraft",
    MinecartWithHopper= "hopper_minecart",
    MinecartWithMonsterSpawner= "spawner_minecart",
    MinecartWithTNT= "tnt_minecart",
    Painting= "painting",
    PrimedTNT= "tnt",
    TextDisplay= "text_display",
    ShulkerBullet= "shulkey_bullet",
    Snowball= "snowball",
    Trident= "trident",
    WindCharge= "wind_charge",
    BreezeWindCharge= "breeze_wind_charge"
}
