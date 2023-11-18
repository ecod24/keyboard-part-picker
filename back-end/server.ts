// DEPENDENCIES
const app = require("./app");

// CONFIGURATION
require("dotenv").config();
const PORT: any = process.env.PORT || 3003;

// LISTEN
app.listen(PORT, () => {
	console.info(`Listening on port ${PORT}:`);
});
