exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    // The URL path of the function will be: 
    // [Your Netlify Domain]/.netlify/functions/hello
    body: JSON.stringify({
      message: "Hello from Netlify Serverless Function!",
      timestamp: new Date().toISOString(),
      path: event.path,
      method: event.httpMethod
    })
  };
};
