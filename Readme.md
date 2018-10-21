<span align="center">
  <img src="./cyclops.svg" />
</span>

<h1 align="center">Cyclops</h1>

[![Build Status](https://travis-ci.org/charliewilco/cyclops.svg?branch=master)](https://travis-ci.org/charliewilco/cyclops)

Simple event emitter w. debugging that reminds me of `require('events')`.

## Rationale

There are lots of different implementations of an _event emitter_. The reason this exists is to extend the ability to have custom events.

```typescript
import * as events from "events";

/**
 * Represents a polling timeout
 * @constructor
 */
class Poller<T> extends events.EventEmitter {
  timeout: number;

  constructor(timeout: number = 100) {
    super();
    this.timeout = timeout;
  }

  poll() {
    setTimeout(() => this.emit("poll"), this.timeout);
  }

  onPoll(cb: () => void) {
    this.on("poll", cb);
  }
}
```

## Installation

```sh
yarn add @charliewilco/cyclops
```

## Usage Examples

### Basic

```js
const emit = new Cyclops({}, { debug: true });
let val = 0;

emit.subscribe("mock event", (n: number) => (val = n));
emit.emit("mock event", 18);
```

### Polling

```js
const emit = new Cyclops();

class Poller {
  constructor(timeout = 500) {
    this.timeout = timeout;
  }
  poll() {
    setTimeout(() => emit.emit("poll"), this.timeout);
  }

  onPoll(cb) {
    emit.subscribe("poll", cb);
  }
}
let count = 0;
const poll = new Poller(1000);

poll.onPoll(() => {
  count++;

  console.log(count);

  poll.poll();
});

poll.poll();
```
