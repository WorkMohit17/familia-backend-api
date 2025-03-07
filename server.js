const express = require("express");
const cors = require("cors");

require("dotenv").config();

const orphanRoutes = require("./routes/orphanRoutes");
const parentRoutes = require("./routes/parentRoutes");
const orphanageRoutes = require("./routes/orphanageRoutes");
const matchRoutes = require("./routes/matchRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", matchRoutes);
app.use("/api/orphans", orphanRoutes);
app.use("/api/parents", parentRoutes);
app.use("/api/orphanages", orphanageRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
