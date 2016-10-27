import {Template} from 'meteor/templating';
import './cliente.html';
import {Pessoa} from '../api/cliente.js'

Template.cliente.events({
  "submit .cadastro": function(event){
    event.preventDefault();

    const nome = $('#nome').val();
    const sobrenome = $('#sobrenome').val();
    const idade = $('#idade').val();

    const cliente = {
      nome: nome,
      sobrenome: sobrenome,
      idade: idade
    };
    Pessoa.insert(cliente);
    console.log(cliente);

  }
});
