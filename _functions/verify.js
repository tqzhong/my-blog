const authDB = require('../../static/auth/db.json');

exports.handler = async (event) => {
  const { path, token } = event.queryStringParameters;
  
  if (!path || !token) {
    return { statusCode: 400, body: 'Missing parameters' };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ valid: authDB[path] === token })
  };
};