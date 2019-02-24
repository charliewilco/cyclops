interface CyclopsEvents {
  [key: string]: any[];
}

interface CyclopsSubscription {
  release: () => void;
}

/**
 * Another event emitter, implementation
 * @class Cyclops
 */
export default class Cyclops {
  public events: CyclopsEvents;
  constructor(events?: CyclopsEvents) {
    this.events = events || {};
  }

  /**
   * Subscribe to an event
   * @method subscribe
   * @param name {String}
   * @param cb {Function}
   * @returns CyclopsSubscription
   */
  public subscribe(name: string, cb: Function): CyclopsSubscription {
    (this.events[name] || (this.events[name] = [])).push(cb);

    return {
      release: () => {
        this.events[name] &&
        this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1)
      }

    };
  }

  /**
   * Emit a named event and pass any value to the callback
   * @method emit
   * @param name {String}
   * @param args 
   */

  public emit(name: string, ...args: any[]) {
    (this.events[name] || []).forEach(fn => fn(...args));
  }
}
