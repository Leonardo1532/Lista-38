// Get = Solicitar
// Post = Enviar, Adicionar ou Criar
// Put = Editar ou Atualizar
// Delete = Deletar

class Carro {
    Marca: string
    Modelo: string
    Categoria: string
    Ano: number
    Quilometragem: number
    Valor: number
    constructor(marca: string, modelo: string, categoria: string, ano: number, quilometragem: number, valor: number) {
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor
    }
}

let Carro1 = new Carro("hyundai", "I30", "Compacto", 2012, 80000, 45000)

// Get:

function Get() {
    return fetch('https://apigenerator.dronahq.com/api/X6ku09AJ/Carro')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

// Post, Put, Delete:

async function PostData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

async function PutData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

async function DeleteData(url = '') {
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });
    return response.json();
}