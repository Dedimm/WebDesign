
// let url = "db.json" 
let url = "https://67348a38a042ab85d11a984d.mockapi.io/Animal"
function read(id)
{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.titulo').innerHTML = data[id].name
        
    })
    
    .catch(err =>(
        console.log("Erro " + err)
    ));
}

function save()
{
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': 'marcio',
            'avatar': 'minha_url'
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => (
            console.log("Erro " + err)
        ))
}
save();