console.log('antes do log')

fetch('https://jsonplaceholder.typicode.com/users'), console.log('executando de fetch')
    .then(function (response) {
        console.log('pegando o response', response)
        return response.json();
    })
    .then(function (json) {
        console.log('pegando o json', json)
        return response.json(json);
    })
    console.log ('finalizando o fetch')