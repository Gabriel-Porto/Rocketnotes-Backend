const { Router } = require("express");

const UserControllers = require("../controllers/UserControllers")

const usersRoutes = Router();

const userControllers = new UserControllers();

// function myMiddleware(request, response, next) { 
//     console.log("Você passou pelo middleware");
    
//     if(!request.body.isAdmin) {
//         return response.status(401).json({ message: "user unauthorized"});
//     }

//     next();
// }

usersRoutes.post("/", userControllers.create);
usersRoutes.put("/:id", userControllers.update)

module.exports = usersRoutes;