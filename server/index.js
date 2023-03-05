const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// simple route
app.get("/", (req, res) => {
	res.json({ message: "hello world." });
});

app.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const { id } = req.body;

		const newEntry = await pool.query(
			"INSERT INTO Test (id) VALUES ($1) RETURNING *",
			[id]
		);
		res.json(newEntry.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

app.post("/chatGPT", async (req, res) => {
	try {
		console.log(req.body);
		const { jsonOutput } = req.body;

		const newEntry = await pool.query(
			"INSERT INTO ChatGPTAnswers (ans) VALUES ($1) RETURNING *",
			[jsonOutput]
		);
		res.json(newEntry.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
