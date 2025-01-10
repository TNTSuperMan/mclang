import type { Base } from "./base";
import type { Arbitrary, Coordinate, Entity, Gamemode } from "./types";
//Reference: https://minecraft.wiki/w/Target_selectors
type Range = [number, number]
export const enum Player{
    All= "@a",
    Near= "@p",
    Random= "@r",
    Executer="@s"
}
type TargetOption = Arbitrary<{
    coordinate: Arbitrary<Coordinate>
    distance: number | Range
    coord_volume: Arbitrary<Coordinate>
    verticalRotation: number | Range
    horizontalRotation: number | Range
    tag: string
    tagNot: string
    team: string
    teamNot: string
    name: string
    nameNot: string
    type: Entity
    typeNot: Entity
    level: number | Range
    gamemode: Gamemode
    gamemodeNot: Gamemode
    limit: number
}>
type DeepResult = (DeepResult|string|undefined)[];
const toString = (name: string, target: undefined | string | Entity | Gamemode | number | Range | Arbitrary<Coordinate>, isNot?: boolean):string|DeepResult|undefined => {
    if(typeof target == "number"){
        return `${name}=${target.toString()}`
    }else if(Array.isArray(target)){
        return `${name}=${target[0]}..${target[1]}`
    }else if(typeof target == "undefined"){
        return
    }else if(typeof target == "string"){
        return `${name}=${isNot?"!":""}${target}`
    }else{
        return [
            toString(`${name}x`, target.x),
            toString(`${name}y`, target.y),
            toString(`${name}z`, target.z),
        ]
    }
}
type TargetOptions = TargetOption[];
export class Target implements Base{
    #data: string = "";
    constructor(base: "@a" | "@p" | "@r" | "@s" | "@e", opt?: TargetOptions){
        const args = opt?.map(e=>[
            toString("", e.coordinate),
            toString("distance", e.distance),
            toString("d", e.coord_volume),
            toString("x_rotation", e.verticalRotation),
            toString("y_rotation", e.horizontalRotation),
            toString("tag", e.tag),
            toString("tag", e.tagNot, true),
            toString("name", e.name),
            toString("name", e.nameNot, true),
            toString("type", e.type),
            toString("type", e.typeNot, true),
            toString("level", e.level),
            toString("gamemode", e.gamemode),
            toString("gamemode", e.gamemodeNot, true),
            toString("limit", e.limit)
        ]).flat(3).filter(e=>e).join(",")
        this.#data = `${base}`;
        if(args) this.#data += `[${args}]`
    }
    toString(): string {
        return this.#data;
    }
}

export const generator = {
    player(ptype: Player, opt?: TargetOptions){
        return new Target(ptype, opt)
    },
    mob(type: Entity, opt?: TargetOptions){
        return new Target("@e", [{type, limit:1}, ...opt??[]])
    },
    mobs(types: Entity[], opt?: TargetOptions){
        return new Target("@e", [...types.map(type=>({type})), ...opt??[]])
    }
}