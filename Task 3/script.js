/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';
fetch("https://api.github.com/users")
   
    .then(response => response.json())
    .then(json => {

        let li = `Users profiles`;

        json.forEach(user => {
            li += `<br><br><div class="profile"><br>
            <a class="names">${user.login}</a><br>
                <img class="img" src="${user.avatar_url}"></img></div>`;
        });
    const element = document.getElementById("btn");
    element.addEventListener('click', function() {
     document.getElementById("output").innerHTML = li; 
    });
});