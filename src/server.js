const express = require("express"); //IMPORTA EXPRESS

const routes = require("./routes")

const app = express(); //INSTANCIA EXPRESS
app.use(express.json()) //ESPECIFICA O FORMATO DOS REQUEST EM JSON

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server Rodando na porta: ${PORT}`));