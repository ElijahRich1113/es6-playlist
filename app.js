const genres = document.querySelector("#container");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");


btn1.addEventListener("click", function(){
    const playlist = data.filter(songs => {
        return songs.genre === 'R&B/Soul';
      })
      .map(songs => {
        return `
         <img class = "images" src = "${songs.image}"/>
         <div>Artist:${songs.artist}</div>
         <div>Song Title:${songs.song}</div>
        `;
      })
      .join('');
    
      genres.innerHTML = playlist;
});


  
btn2.addEventListener("click", function(){
    const playlist2 = data.filter(songs => {
        return songs.genre === 'Hip Hop/Rap';
    })
    .map(songs => {
        return `
         <img class = "images" src = "${songs.image}"/>
         <div>Artist:${songs.artist}</div>
         <div>Song Title:${songs.song}</div>
        `;
      })
      .join('');

      genres.innerHTML = playlist2;
});