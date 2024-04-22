class InterfaceUsuario {
    constructor(gerenciadorContatos, buscaContatos) {
        this.gerenciadorContatos = gerenciadorContatos;
        this.buscaContatos = buscaContatos;
    }

    exibirMenu() {
        console.log('\nMenu:');
        console.log('1. Adicionar Contato');
        console.log('2. Remover Contato');
        console.log('3. Listar Contatos');
        console.log('4. Buscar Contato por Nome');
        console.log('5. Sair');
    }

    adicionarContato() {
        rl.question('Nome: ', nome => {
            rl.question('Telefone: ', telefone => {
                rl.question('Email: ', email => {
                    const contato = new Contato(nome, telefone, email);
                    this.gerenciadorContatos.adicionarContato(contato);
                    console.log('Contato adicionado com sucesso!');
                    this.exibirMenu();
                    this.selecionarOpcao();
                });
            });
        });
    }

    removerContato() {
        console.log('Lista de Contatos:');
        this.gerenciadorContatos.listarContatos().forEach((contato, index) => {
            console.log(`${index + 1}. ${contato.nome}`);
        });
        rl.question('Informe o número do contato que deseja remover: ', index => {
            const contato = this.gerenciadorContatos.listarContatos()[index - 1];
            this.gerenciadorContatos.removerContato(contato);
            console.log('Contato removido com sucesso!');
            this.exibirMenu();
            this.selecionarOpcao();
        });
    }

    listarContatos() {
        console.log('Lista de Contatos:');
        this.gerenciadorContatos.listarContatos().forEach((contato, index) => {
            console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
        });
        this.exibirMenu();
        this.selecionarOpcao();
    }

    buscarContatoPorNome() {
        rl.question('Digite o nome do contato que deseja buscar: ', nome => {
            const contatosEncontrados = this.buscaContatos.buscarPorNome(this.gerenciadorContatos, nome);
            console.log('Contatos encontrados:');
            contatosEncontrados.forEach(contato => {
                console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
            });
            this.exibirMenu();
            this.selecionarOpcao();
        });
    }

    selecionarOpcao() {
        rl.question('Selecione uma opção: ', opcao => {
            switch (opcao) {
                case '1':
                    this.adicionarContato();
                    break;
                case '2':
                    this.removerContato();
                    break;
                case '3':
                    this.listarContatos();
                    break;
                case '4':
                    this.buscarContatoPorNome();
                    break;
                case '5':
                    rl.close();
                    break;
                default:
                    console.log('Opção inválida! Tente novamente.');
                    this.exibirMenu();
                    this.selecionarOpcao();
                    break;
            }
        });
    }

    //start
    iniciar() {
        console.log('Bem-vindo ao Sistema de Gerenciamento de Contatos!');
        this.exibirMenu();
        this.selecionarOpcao();
    }
}