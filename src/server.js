require("express-async-errors")

const AppError = require("./utils/AppError")

const express = require("express"); //IMPORTA EXPRESS

const routes = require("./routes");

const app = express(); //INSTANCIA EXPRESS
app.use(express.json()); //ESPECIFICA O FORMATO DOS REQUEST EM JSON

app.use(routes);

app.use(( error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server Rodando na porta: ${PORT}`));