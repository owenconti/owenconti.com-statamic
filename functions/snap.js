exports.handler = async (event, context) => {
  const params = new URLSearchParams({
    ...event.queryStringParameters,
    token: process.env.OHSEESNAPS_TOKEN
  });

  return { statusCode: 301, headers: {
    Location: `https://ohseesnaps.com?${params.toString()}`,
} };
};
       