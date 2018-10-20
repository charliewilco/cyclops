
interface CyclopsEvent {
	[key: string]: any[]
}

interface CyclopsOptions {
	debug?: true;
}

class Cyclops {
	events: CyclopsEvent;
	debug?: boolean;
	public constructor(events = {}, options: CyclopsOptions) {
		this.events = events;
	}

	subscribe(name: string, cb: Function) {
    (this.events[name] || (this.events[name] = [])).push(cb);

    return {
      release: () =>
        this.events[name] &&
        this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1)
    };
  }

  public emit(name: string, ...args: any[]) {
    return (this.events[name] || []).map(fn => fn(...args));
  }
}



export default Cyclops