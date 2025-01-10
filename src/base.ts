export interface Base{
    toString(): string;
}
const commands: string[] = [];
export const addRaw = commands.push.bind(commands)
export const command = () => commands.join("\n")