interface CyclopsEvent {
  [key: string]: any[];
}

interface CyclopsOptions {
  debug?: true;
}

 /**
  * Adapted from 'https://gist.github.com/kutyel/7d8f204a347840a6ee7220743957e504'
  */

const debug = (title: string): string => `|--- ${title} ---|`;

class Cyclops {
  events: CyclopsEvent;
  debug?: boolean;
  public constructor(events = {}, options: CyclopsOptions) {
    this.events = events;
    this.debug = options.debug;
  }

  public subscribe(name: string, cb: Function) {
    (this.events[name] || (this.events[name] = [])).push(cb);

    if (this.debug) {
      console.log(debug("EVENTS"), this.events);
    }

    return {
      release: () =>
        this.events[name] &&
        this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1)
    };
  }

  public emit(name: string, ...args: any[]) {
    if (this.debug) {
      console.log(debug("EVENTS"), name, this.events[name].map(fn => fn));
    }

    return (this.events[name] || []).map(fn => fn(...args));
  }
}
export default Cyclops;
