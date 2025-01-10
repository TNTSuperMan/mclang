import { addRaw, type Base } from "./base";
import type { Target } from "./target";

let setups: [string,string][] = [];

export type Criteria =
    "dummy"|"trigger"|"deathCount"|"playerKillCount"|"totalKillCount"|"health"|"xp"|"level"|"food"|"air"|"armor"

class Score implements Base{
    #d: string = "";
    constructor(name: string, criteria: Criteria){
        if(setups.some(e=>e[0]==name))throw new Error("already defined score: "+name)
        setups.push([name,`scoreboard objectives add ${name} ${criteria}`])
        this.#d = name;
    }
    toString(){
        return this.#d;
    }
    Set(target: Target,value: number){
        addRaw(`scoreboard players set ${target.toString()} ${this.#d} ${value.toString()}`)
    }
}

export const setup = () => setups.join("\n")

export const generator = {
    useVar(name: string){
        return new Score(name, "dummy");
    },
    useState(name: string, criteria: Criteria){
        return new Score(name, criteria);
    }
}