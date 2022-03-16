const Queue = require('./index');

describe('Queue data structure', () => {
	let queue;

	beforeEach(() => {
		queue = new Queue()
	})

	it('has a bottom of 0 initially', () => {
		expect(queue.bottom).toBe(0)
	})

	describe('enqueue method', () => {
		
		it('has an enqueue method', () => {
			expect(typeof queue.enqueue).toBe('function')
		})

		it('increases bottom when item is added', () => {
			queue.enqueue('Snoopy')
			expect(queue.bottom).toBe(1)
		})


	})

	describe('dequeue method', () => {
		
		it('has an dequeue method', () => {
			expect(typeof queue.dequeue).toBe('function')
		})

		it('decreases bottom when item is dequeued', () => {
			queue.enqueue('Snoopy')
			queue.enqueue('Woodstock')
			queue.enqueue('Charlie Brown')
			queue.dequeue()
			expect(queue.bottom).toBe(3)
		})

		it('Dequeue returns items based on first in first out', () => {
			queue.enqueue('first')
			queue.enqueue('second')
			queue.enqueue('third')
			expect(queue.dequeue()).toBe('first')
		})


	})

}) 