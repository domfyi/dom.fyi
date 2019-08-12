exports.handler = function(event, context, callback) {
  callback(null, {
    headers: {
      "Content-Type": "text/plain",
      "X-Content-Type-Options": "nosniff",
    },
    statusCode: 200,
    body: "Hello, World",
  })
}
