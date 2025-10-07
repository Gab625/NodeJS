enum Papel {
    Administrador = "adm",
    Usuario = "usr",
    Relatorios = "rel",
    Cadastrador = "cad"
}

type Usuario = {
    nome : string,
    login : string,
    senha : string,
    papel: Papel
}

const digaOla = (usr: Usuario): void => {
    console.log("Olá "+usr.nome + "!")
}

const usuarios: Usuario[] = [
    {
        nome: "Fabio",
        login: "fmarques",
        senha: "456#",
        papel: Papel.Usuario
    }
]

usuarios.push({
    nome: "Gabriel",
    login: "pradog",
    senha: "123#",
    papel: Papel.Administrador
})

usuarios.forEach(digaOla)