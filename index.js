const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    const response = await fetch(event.url);

    if (response.ok) {
      const data = await response.json();

      return {
        statusCode: 200,
        body: JSON.stringify({
          value: data.covered_percent
        })
      }
    } else {
      throw new Error('Invalid response')
    }
  } catch (e) {
    return {
      statusCode: 500
    }
  }
};
