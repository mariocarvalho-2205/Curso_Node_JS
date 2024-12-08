async function fetchData (apiCall) {
    const response = await apiCall()
    return response.data
}

module.exports = fetchData