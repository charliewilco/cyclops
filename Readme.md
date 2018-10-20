# Cyclops

---

Simple event emitter w. debugging that reminds me of `require('events')`. 

### Examples

### Simple

```js
const emit = new Cyclops({}, { debug: true })
let val = 0;

emit.subscribe('mock event', (n: number) => (val = n))
emit.emit('mock event', 18)
```