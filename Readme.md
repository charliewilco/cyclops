# Cyclops

---

[![Build Status](https://travis-ci.org/charliewilco/cyclops.svg?branch=master)](https://travis-ci.org/charliewilco/cyclops)

Simple event emitter w. debugging that reminds me of `require('events')`. 

## Installation

```sh
yarn add cyclops
```

## Usage Examples

### Simple

```js
const emit = new Cyclops({}, { debug: true })
let val = 0;

emit.subscribe('mock event', (n: number) => (val = n))
emit.emit('mock event', 18)
```


### Polling