let value: string | number;
let status: 'enable' | 'disable';

function merge<value extends object, status extends object>(objA: value, objB: status): value & status {
    return Object.assign({}, objA, objB)
}