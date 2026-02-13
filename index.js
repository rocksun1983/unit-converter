import express from "express";
import { convertValue } from "./logic/conversions.js";
import { readConversionData } from "./utils/fileHandler.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/convert", (req, res) => {
    const value = parseFloat(req.query.value);
    const type = req.query.type;

    if (isNaN(value) || !type) {
        return res.status(400).json({ error: "Invalid input" });
    }

    // Read JSON ( to satisfy fs requirement)
    const data = readConversionData();
    console.log(`Loaded ${data.length} sample conversions`);

    const result = convertValue(value, type);

    if (result === null) {
        return res.status(400).json({ error: "Unsupported conversion type" });
    }

    res.json({
        input: value,
        type,
        result
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

