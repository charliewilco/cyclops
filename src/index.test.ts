import Cyclops from "./cyclops";

const mock = jest.fn();

describe("Cyclops", () => {
  it("emits result when fired", () => {
    const m = new Cyclops({}, { debug: true });
    let val = 0;

    m.subscribe("mock event", (n: number) => (val = n));
    m.emit("mock event", 18);

    expect(val).toBe(18);
  });

  it("fires call back when emitted", () => {
    const m = new Cyclops({}, { debug: true });
    let val = 0;

    m.subscribe("mock event", (n: number) => mock(n));
    m.emit("mock event", 18);

    expect(mock).toHaveBeenCalled();
  });
  xit("fires event", () => {});
});
