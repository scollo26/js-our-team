// In allegato trovate un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall’utente.






const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

const teamContainer = document.querySelector('.team-container');


// funzione inserimento card

function printCards(array, container) {
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];
  
      const templateDiv = `
      <div class="team-card">
        <div class="card-image">
          <img src="img/${obj.image}" alt="${obj.name}"/>
        </div>
        <div class="card-text">
          <h3>${obj.name}</h3>
          <p>${obj.role}</p>
        </div>
      </div>`;
  
      container.innerHTML += templateDiv;
      //console.log(templateDiv);
    }
}


// stampo in html tutte le foto
printCards(team, teamContainer);



// dichiarazione variabili input bottone
let inputname = document.getElementById('name');
let inputrole = document.getElementById('role');
let inputimage = document.getElementById('image');
let inputbutton = document.getElementById('addMemberButton');


// inserimento di nuova card con button
inputbutton.addEventListener('click', function(){
    


    

    // let newname = inputname.value;
    // let newrole = inputname.value;
    // let newimage = inputimage.value; 


    // array ad oggetti
    let obj ={

    // name: newname,
    // role: newrole,
    // image: newimage,

    name: inputname.value,
    role: inputrole.value,
    image: inputimage.value,
    
    };

    // azzero input dopo inserimento img

    inputname.value ='';
    inputrole.value ='';
    inputimage.value ='';

    // push nuovo array oggetti dentro il primo array

    team.push(obj);

    // ripulisco html da tutte le foto
    teamContainer.innerHTML = '';


    // stampo in html tutte le foto piu la nuova foto 
    printCards(team, teamContainer);

});






// new-team-member-04.jpg

