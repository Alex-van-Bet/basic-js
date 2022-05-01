const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  constructor() {
		this.chain = null;
		this.error = null;
	},
  reverseChain() {
		if (this.chain) {
			this.chain = this.chain.split('~~').reverse().join('~~');
		}
		return this;
	},
	finishChain() {
		let new_str = this.chain;
		this.chain = null;
		return new_str;
	},
	getLength() {
			let arr = this.chain = this.chain.split('~~');
		return arr.length;
	},
	removeLink(position) {
		position = Number(position);
		if (Number.isInteger(position) && position > 0) {
			let arr = this.chain = this.chain.split('~~');
			if (position <= arr.length) {
				arr.splice(position - 1, 1);
				this.chain = arr.join('~~');
				return this;
			} else {
				this.chain = null;
				this.error = 1;
				throw new Error("You can't remove incorrect link!");
			}
		} else {
			this.chain = null;
			this.error = 1;
			throw new Error("You can't remove incorrect link!");
		}
	},
  addLink(value) {
		if (!value) {
			if (value === null) {
				value = 'null';
			} else if (isNaN(value)) {
				value = 'NaN';
			} else if (value === 0) {
				value = 0;
			} else if (value === false) {
				value = 'false';
			} else {
				value = '( )';
			}
		}

		if (!this.chain) {
			this.chain = `( ${value} )`;
		} else {
			this.chain = this.chain + `~~( ${value} )`;
		}
		return this;
	},
	
};

module.exports = {
  chainMaker
};
