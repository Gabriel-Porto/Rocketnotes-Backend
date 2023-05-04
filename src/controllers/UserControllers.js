const AppError = require("../utils/AppError");

class UserControllers {
  /**
   * index - GET para listar vários registros
   * show - GET para exibir um registro específico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro
   * delete - DELETE para remover
   */

  create(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      throw new AppError("Nome é obrigatório!");
    };

    response.status(201).json({ name, email, password });
  }
}

module.exports = UserControllers;