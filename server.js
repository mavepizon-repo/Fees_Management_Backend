const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

/*Middleware*/

app.use(express.json());
app.use(cors());

/*Routes*/

const studentRoutes = require("./src/routes/studentRoutes");

const feesRoutes = require("./src/routes/feesRoutes");

const feesFilterRoutes =require("./src/routes/feesFilterRoutes");

const extraCurricularRoutes =require("./src/routes/ExtraCurricularStudentRoutes");

const extraFeesRoutes =require("./src/routes/ExtraCurricularFeesRoutes");

const standardFeesRoutes =require("./src/routes/StandardFeesRoutes"
);



app.use("/api/students", studentRoutes);

app.use("/api/fees", feesRoutes);

app.use("/api/fees",feesFilterRoutes);

app.use("/api/extracurricular",extraCurricularRoutes);

app.use("/api/extracurricular-fees",extraFeesRoutes);

app.use("/api/standardfees",standardFeesRoutes);

/*MongoDB Connection*/

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log(error);
  });

/*Port*/

const PORT = process.env.PORT || 5000;

/*Start Server*/

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});