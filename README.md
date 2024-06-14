# peek-log

Handy peeker from deep nested functional pipe

## Usage

```ts
const nestedFunctionA = (v=0) => v+1
const obj = nestedFunctionA([
    consolePeek( // 0.10021912164260627
        (function nestFunctionB({value}){return value()})
        ({value: () => Math.random(),})
    )
])

console.log('result', obj)
```