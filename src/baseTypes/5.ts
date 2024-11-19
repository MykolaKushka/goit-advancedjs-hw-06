let value: string | number;
value = 'Hello'; // ✅ Allowed
value = 42;      // ✅ Allowed
value = true;    // ❌ Error: Type 'boolean' is not assignable to type 'string | number'

let status: 'enable' | 'disable';
status = 'enable';  // ✅ Allowed
status = 'disable'; // ✅ Allowed
status = 'on';      // ❌ Error: Type '"on"' is not assignable to type '"enable" | "disable"'
