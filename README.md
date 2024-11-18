# isuuid
uuid check for Deno

## Useage  

```ts
import isuuid from "jsr:@deno-library/isuuid";
// or
// import isuuid from "https://deno.land/x/isuuid@v1.0.0/mod.ts";

const str = '5d86c74a-c111-11ea-a575-02fcdc4e7412'; // v1

isuuid(str);     // is uuid    : true
isuuid(v1, 1);   // is uuid v1 : true
isuuid(v1, 2);   // is uuid v2 : false
isuuid(v1, 3);   // is uuid v3 : false
isuuid(v1, 4);   // is uuid v4 : false
isuuid(v1, 5);   // is uuid v5 : false
```

## Interface  
```ts
type Version = 1 | 2 | 3 | 4 | 5;

interface isuuid {
  (str: string, version?: Version): boolean;
}
```

## Test  

```bash
deno test
```  
