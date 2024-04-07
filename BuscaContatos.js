class BuscaContatos {
    constructor() {}

    buscarPorNome(gerenciadorContatos, nome) {
        return gerenciadorContatos.listarContatos().filter(contato => contato.nome.toLowerCase().includes(nome.toLowerCase()));
    }
}
