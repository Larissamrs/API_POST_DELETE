const express = require("express");
const router = express.Router();

router.get("/",(request, response) => {
    response.status(200).send({
        "titulo": "Agenda de Contatos - Reprograma",
        "version": "1.0.0", 
        "mensagem": "Bem vindo(a) a sua agenda de contatos!"
    })
});

module.exports = router;