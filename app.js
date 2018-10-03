const Soul = document.querySelector("#soul-container");
const hipHop = document.querySelector("#hiphop-container");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");


btn1.addEventListener("click", function(){
    const playlist = data.filter(songs => {
        return songs.genre === 'R&B/Soul';
      })
      .map(songs => {
        return `
         <h1>R&B/Soul</h1>
         <div>Cover:${songs.image}</div>
         <div>Artist:${songs.artist}</div>
         <div>Song Title:${songs.song}</div>
        `;
      })
      .join('');
    
      Soul.innerHTML = playlist;
});


  
btn2.addEventListener("click", function(){
    const playlist = data.filter(songs => {
        return songs.genre === 'Hip Hop/Rap';
    })
    .map(songs => {
        return `
         <h1>Hip Hop/Rap</h1>
         <div>Cover:${songs.image}</div>
         <div>Artist:${songs.artist}</div>
         <div>Song Title:${songs.song}</div>
        `;
      })
      .join('');

      hipHop.innerHTML = playlist;
});