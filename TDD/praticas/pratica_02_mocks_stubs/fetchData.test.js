const fetchData = require('./fetchData')

test('fetchData retorna os dados corretos', async () => {
    const mockApiCall = jest.fn().mockResolvedValue({ data: "Hello Word"})

    const result = await fetchData(mockApiCall)

    expect(mockApiCall).toHaveBeenCalled()
    expect(result).toBe('Hello Word')
})