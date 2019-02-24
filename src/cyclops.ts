interface CyclopsEvent {
  [key: string]: any[];
}

class Cyclops {
  events: CyclopsEvent;
  constructor(events?: CyclopsEvent) {
    this.events = events || {};
  }

  public subscribe(name: string, cb: Function) {
    (this.events[name] || (this.events[name] = [])).push(cb);

    return {
      release: () =>
        this.events[name] &&
        this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1)
    };
  }

  public emit(name: string, ...args: any[]) {
    (this.events[name] || []).forEach(fn => fn(...args));
  }
}
export default Cyclops;
