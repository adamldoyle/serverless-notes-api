export default function handler(lambda) {
	return function (event, context) {
		return Promise.resolve()
			.then(() => lambda(event, context))
			.then((body) => [200, body])
			.catch((e) => [500, { error: e.message }])
			.then(([statusCode, body]) => ({
				statusCode,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': true,
				},
				body: JSON.stringify(body),
			}));
	};
}
