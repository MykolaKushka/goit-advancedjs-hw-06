let some: unknown; // 'some' can hold any value but its type is unknown
some = 'Text';

let str: string;
// Use type assertion to ensure 'some' is a string before assignment
if (typeof some === 'string') {
    str = some; // This is now safe
}
