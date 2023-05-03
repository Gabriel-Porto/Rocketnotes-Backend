const express = require("express"); //IMPORTA EXPRESS

const app = express(); //INSTANCIA EXPRESS

app.use(express.json()) //ESPECIFICA O FORMATO DOS REQUEST EM JSON

// app.get('/message/:id/:user', (request, response) => {
//     const { id, user } = request.params;
 
//     response.send(`
//     Mensagem ID: ${id}.
//     Para o Usuário: ${user}.
//     `)
// })


app.post("/users", (request, response) => {
    const { name, email, password } = request.body;

    // response.send(`Usuário: ${name}. E-mail: ${email}. Senha: ${password}`) //SEND: RETORNA NUM FORMATO HTML
    response.json({ name, email, password });
})


const PORT = 3333;
app.listen(PORT, () => console.log(`Server Rodando na porta: ${PORT}`));