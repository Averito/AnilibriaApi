const { queryParamsString } = require('../../src/helpers')

const queryObjectTest1 = {
	pageSize: 15,
	limit: 2
}
const queryObjectTest2 = {
	name: 'someone'
}
const queryObjectTest3 = {
	ids: [56, 1, 2, 53]
}
const queryObjectTest4 = {
	filter: ['yuri', 'hentai']
}
const queryObjectTest5 = {}

describe('queryParamsString function:', () => {
	test('should return queryParams string (2 values)', () => {
		expect(queryParamsString(queryObjectTest1)).toBe('?pageSize=15&limit=2')
	})
	test('should return queryParams string (1 value)', () => {
		expect(queryParamsString(queryObjectTest2)).toBe('?name=someone')
	})
	test('should return queryParams string (1 array value with numbers)', () => {
		expect(queryParamsString(queryObjectTest3)).toBe('?ids=56%2C1%2C2%2C53')
	})
	test('should return queryParams string (1 array value with strings)', () => {
		expect(queryParamsString(queryObjectTest4)).toBe('?filter=yuri%2Chentai')
	})
	test('should return queryParams string (emptyValue)', () => {
		expect(queryParamsString(queryObjectTest5)).toBe('')
	})
})
