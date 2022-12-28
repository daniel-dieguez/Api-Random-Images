
const btn = document.getElementById('button1');
const next = document.getElementById("btnnext");
const back = document.getElementById('btnback');








btn.addEventListener('click',viewData);

function viewData  (){ {const apikey ='PVXFpPiwPtY9OIKfmCmdpYhtaRInBlWD';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

peticion 
    .then(response => response.json())
    .then(({data}) =>{
        const {url} = data.images.original;
        const imagen =document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
    })
    .catch(error => console.warn (error));


    const getImagen = async () =>{
        try{
            const response = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
            const {data} = await response.json();
            const {url} = data.images.original;
            const imagen = document.createElement('img');
            imagen.src = url;
            imagen.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${imagen.src}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"></h5>
            </div>
          </div>`;
          console.log("Click cambio");
        }catch(error){
            console.log (error);
        }
    }

getImagen();

  
  }
}