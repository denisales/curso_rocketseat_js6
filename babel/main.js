class List {
    constructor(){
        this.data = []
    }

    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}


class TodoList extends List{
    constructor(){
        super();
        this.usuario = 'Diego'
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}


const MinhaLista = new TodoList();

document.querySelector('#novotodo').onclick = () => MinhaLista.add('Novo todo 2');

MinhaLista.mostraUsuario();

//#########################################################
class Matematica {
    static soma(a, b){
        return a + b
    }
}

console.log(Matematica.soma(10, 20));