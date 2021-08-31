const loadFrnds = () => {
    fetch ('https://randomuser.me/api/?results=5')
    .then (res => res.json())
    .then (data => displayFrnds(data))
}

loadFrnds ();

const displayFrnds = data =>{
    const frnds = data.results;
     const frndsContainer = document.getElementById('frndsContainer');
    for (const frnd of frnds){
        const p = document.createElement('p');
        p.innerText = `Name:${frnd.name.title} ${frnd.name.first} ${frnd.name.last}, Email:${frnd.email}`;
        frndsContainer.appendChild(p);
    }
}