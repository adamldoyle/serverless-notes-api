import * as debug from './debug-lib';

export default function handler(lambda) {
	return function (event, context) {
		debug.init(event, context);
		return Promise.resolve()
			.then(() => lambda(event, context))
			.then((body) => [200, body])
			.catch((e) => {
				debug.flush(e);
				return [500, { error: e.message }];
			})
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
