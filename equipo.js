const API_URL = "http://198.251.74.213:10012/api/equipos";
const equipo = document.querySelector('.container');
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get('id');
console.log(`${API_URL}/${id}`)

fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
