export let x = 1;
export function add(a:number, b:number):number {
    return a + b;
}

function sub(a:number, b:number):number {
    return a - b;
}

let z = 10;

export {sub,z};

//there can be only one default export in a module 
export default function mul(a:number, b:number):number {
    return a * b;
}