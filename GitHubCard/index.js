/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
axios.get('https://api.github.com/users/WilliamBerlin76')
.then(response => {
  console.log(response.data);
  const newCard = makeCard(response.data);
  cardsContainer.appendChild(newCard);
  })
.catch(error => {
  console.log('the data was not returned', error)
})

const followersArray = ['emilyeri', 'lowell1', 'rushman7', 'ndacode', 'DtJohnson5', 'adbirahmanfarah'];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)

  .then(response => {
    const newCard = makeCard(response.data);
    cardsContainer.appendChild(newCard);
  })
})
const cardsContainer = document.querySelector('.cards');
function makeCard(cardInfo) {
  const card = document.createElement('div'),
        picture = document.createElement('img'),
        info = document.createElement('div'),
        name = document.createElement('h3'),
        userName = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        profileLink = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p');

        // structure
        card.appendChild(picture);
        card.appendChild(info);
        info.appendChild(name);
        info.appendChild(userName);
        info.appendChild(location);
        info.appendChild(profile);
        info.appendChild(followers);
        info.appendChild(following);
        info.appendChild(bio);
        profile.appendChild(profileLink);

        //classes
        card.classList.add('card');
        info.classList.add('card-info');
        name.classList.add('name');
        userName.classList.add('username');

        //content
        picture.src = cardInfo.avatar_url;
        name.textContent = cardInfo.name;
        userName.textContent = cardInfo.login;
        location.textContent = `Location: ${cardInfo.location}`;
        profileLink.href = cardInfo.html_url;
        profileLink.textContent = cardInfo.html_url;
        followers.textContent = `followers: ${cardInfo.followers}`;
        following.textContent = `following: ${cardInfo.following}`;
        bio.textContent = `Bio: ${cardInfo.bio}`;
    
    return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
