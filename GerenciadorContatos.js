class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    removerContato(contato) {
        const index = this.contatos.indexOf(contato);
        if (index !== -1) {
            this.contatos.splice(index, 1);
        }
    }

    listarContatos() {
        return this.contatos;
    }
}