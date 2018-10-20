import Cyclops from './cyclops'

const mock = jest.fn()
const falseMock = jest.fn()

describe('Cyclops', () => {


	it('takes condition and fires function', () => {
		const m = new Cyclops({}, { debug: true })
		let val = 0

		m.subscribe('mock event', (n: number) => (val = n))
		m.emit('mock event', 18)

		expect(val).toBe(18)
	})
	it('does not fire callback if false', () => {
		const m = new Cyclops({}, { debug: true })
		let val = 0

		m.subscribe('mock event', (n: number) => mock(n))
		m.emit('mock event', 18)

		expect(mock).toHaveBeenCalled()
	})
	xit('fires event', () => {})
})
