const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gerenciadorContatos = new GerenciadorContatos();
const buscaContatos = new BuscaContatos();
const interfaceUsuario = new InterfaceUsuario(gerenciadorContatos, buscaContatos);

interfaceUsuario.iniciar();