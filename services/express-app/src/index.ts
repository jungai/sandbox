import 'dotenv/config';
import { app } from './app';
import { env } from './utils/env';

const PORT = env.PORT;

app.listen(PORT, () => {
	console.log(`server start on port ${PORT} 🚀`);
});
