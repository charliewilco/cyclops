//
//
// const cyclops = new Cyclops(condition, cb())
const Emitter = function() {
	this._listeners = { }
}

// https://github.com/facebook/emitter
// https://github.com/slobak/cyclops/blob/master/lib/common/emitter.js
// https://github.com/developit/mitt
// https://github.com/sindresorhus/emittery

export default class Cyclops {
	constructor(condition, callback) {
		condition === true && callback()


		return {
			on: function() {

			},

			off: function() {

			}
		}
	}

	_listeners() {

	}
}
