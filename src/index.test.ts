import EventEmitter from "./cyclops";

const mock = jest.fn();

describe("Cyclops", () => {
  it("emits result when fired", () => {
    const m = new EventEmitter({});
    let val = 0;

    m.subscribe("mock event", (n: number) => (val = n));
    m.emit("mock event", 18);

    expect(val).toBe(18);
  });

  it("contains event names", () => {
    const m = new EventEmitter({});

    m.subscribe("mock event", mock);
    m.subscribe("other mock event", mock);
    const events = Object.keys(m.events);

    expect(events).toContain("mock event");
    expect(events).toContain("other mock event");
  });

  it("fires call back when emitted", () => {
    const m = new EventEmitter({});
    let val = 0;

    m.subscribe("mock event", (n: number) => mock(n));
    m.emit("mock event", 18);

    expect(mock).toHaveBeenCalled();
  });

  it("unsubscribes from event", () => {
    const m = new EventEmitter();

    let val = 0;

    const e = m.subscribe("mock event", (n: number) => (val = n));
    m.subscribe("other mock event", mock);
    m.emit("mock event", 10);
    expect(val).toBe(10);

    e.release();

    m.emit("mock event", 18);
    expect(val).not.toBe(18);
    expect(m.events["mock event"]).toHaveLength(0);
  });

  xit("fires event", () => {});
});
