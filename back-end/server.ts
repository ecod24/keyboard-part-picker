// DEPENDENCIES
import app from "./app";
import dotenv from "dotenv";

// CONFIGURATION
dotenv.config();

const PORT: any = process.env.PORT || 3003;

// LISTEN
app.listen(PORT, () => {
	console.info(`Listening on port ${PORT}:`);
});
