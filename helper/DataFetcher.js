class DataFetcher {
  async fetchData(apiEndpoint, method = 'GET', body) {
    try {
      let options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        }
      }
      if (body) {
        options['body'] = JSON.stringify(body)
      }
      const response = await fetch(apiEndpoint, options);
      return await response.json();
    } catch (error) {
      throw new Error('Error fetching data. Please try again.');
    }
  }
}

export default DataFetcher;
