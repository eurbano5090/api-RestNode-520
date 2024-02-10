const express = require('express');
const v1Router=require('./v1/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./v1/config/swaggerConfig');

const app = express();
const PORT=process.env.PORT || 3000;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(express.urlencoded({extends:true}))

app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});
app.use("/api/v1", v1Router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
  });

