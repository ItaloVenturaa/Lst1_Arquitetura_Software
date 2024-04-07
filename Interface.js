const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gerenciadorContatos = new GerenciadorContatos();
const buscaContatos = new BuscaContatos();


function exibirMenu() {
    //in
    console.log('\nMenu:');
    console.log('1. Adicionar Contato');
    console.log('2. Remover Contato');
    console.log('3. Listar Contatos');
    console.log('4. Buscar Contato por Nome');
    console.log('5. Sair');
}

function adicionarContato() {
    rl.question('Nome: ', nome => {
        rl.question('Telefone: ', telefone => {
            rl.question('Email: ', email => {
                const contato = new Contato(nome, telefone, email);
                gerenciadorContatos.adicionarContato(contato);
                console.log('Contato adicionado com sucesso!');
                exibirMenu();
                selecionarOpcao();
            });
        });
    });
}

function removerContato() {
    console.log('Lista de Contatos:');
    gerenciadorContatos.listarContatos().forEach((contato, index) => {
        console.log(`${index + 1}. ${contato.nome}`);
    });
    rl.question('Informe o número do contato que deseja remover: ', index => {
        const contato = gerenciadorContatos.listarContatos()[index - 1];
        gerenciadorContatos.removerContato(contato);
        console.log('Contato removido com sucesso!');
        exibirMenu();
        selecionarOpcao();
    });
}

function listarContatos() {
    console.log('Lista de Contatos:');
    gerenciadorContatos.listarContatos().forEach((contato, index) => {
        console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
    exibirMenu();
    selecionarOpcao();
}

function buscarContatoPorNome() {
    rl.question('Digite o nome do contato que deseja buscar: ', nome => {
        const contatosEncontrados = buscaContatos.buscarPorNome(gerenciadorContatos, nome);
        console.log('Contatos encontrados:');
        contatosEncontrados.forEach(contato => {
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
        });
        exibirMenu();
        selecionarOpcao();
    });
}

function selecionarOpcao() {
    rl.question('Selecione uma opção: ', opcao => {
        switch (opcao) {
            case '1':
                adicionarContato();
                break;
            case '2':
                removerContato();
                break;
            case '3':
                listarContatos();
                break;
            case '4':
                buscarContatoPorNome();
                break;
            case '5':
                rl.close();
                break;
            default:
                //colocar qualquer coisa que não seja numero 
                console.log('Opção inválida! Tente novamente.');
                exibirMenu();
                selecionarOpcao();
                break;
        }
    });
}

//start
console.log('Bem-vindo ao Sistema de Gerenciamento de Contatos!');
exibirMenu();
selecionarOpcao();
