import Cyclops from './'

const mock = jest.fn()
const falseMock = jest.fn()

describe('Cyclops', () => {
	beforeAll(() => {
		const oneEye = new Cyclops((5 > 0), mock)
		const falsy = new Cyclops(!(5 > 0), falseMock)
	})
	
	it('takes condition and fires function', () => {
		expect(mock).toHaveBeenCalled()
	})
	it('does not fire callback if false', () => {
		expect(falseMock).not.toHaveBeenCalled()

	})
	xit('fires event')
})
