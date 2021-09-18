const API_URL = "http://198.251.74.213:10012/api";

const listaEquipos = document.querySelector("#app");

fetch(`${API_URL}/equipos`)
    .then((response) => response.json())
    .then((equipos) => {
        // const template = equipos.map((equipo) => `<li><p>${equipo.code} ${equipo.name}</p></li>`);
        // HTMLResponse.innerHTML = `<ul>${template}</ul>`;
        equipos.forEach(equipo => {
            
            const p = document.createElement('p')
            p.setAttribute('id', equipo.id)
            p.innerHTML = `${equipo.code} ${equipo.name} ${equipo.category_id[1]}`;
            p.addEventListener('click', function() {
                window.location.href = `./equipo.html?id=${equipo.id}`
            })
            listaEquipos.appendChild(p);
        })
    });
