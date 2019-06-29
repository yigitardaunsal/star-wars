function getMovies() {
  fetch("https://swapi.co/api/films/").then(function(response){
    return response.json();
  }).then(function(movies){
    var results = movies.results;
    
    let output = "<div class='movies-content'>";
    
    results.forEach(function(movie){
      output += "<div class='movie'>";
      output += "<h2>" + movie.title +"</h2>";
      output += "<ul>";
      output += "<li><strong>Bölüm No: </strong>" + movie.episode_id + "</li>"
      output += "<li><strong>Başlangıç Yazısı: </strong>" + movie.opening_crawl + "</li>"
      output += "<li><strong>Yönetmen: </strong>" + movie.director + "</li>"
      output += "<li><strong>Yapımcı: </strong>" + movie.producer + "</li>"
      output += "<li><strong>Yayın Tarihi: </strong>" + movie.release_date + "</li>"
      output += "</ul>";
      output += "</div>";
    });

    output += "</div>";

    document.getElementById("movies").innerHTML += output;
    $('#loader').fadeOut();
  });
}

function getCharacters() {
  fetch("https://swapi.co/api/people/").then(function(response){
    return response.json();
  }).then(function(characters){
    var results = characters.results;
    
    let output = "<div class='characters-content'>";
    
    results.forEach(function(character){
      output += "<div class='character'>";
      output += "<h2>" + character.name +"</h2>";
      output += "<ul>";
      output += "<li><strong>Boy: </strong>" + character.height + "</li>"
      output += "<li><strong>Kilo: </strong>" + character.mass + "</li>"
      output += "<li><strong>Saç Rengi: </strong>" + character.hair_color + "</li>"
      output += "<li><strong>Ten Rengi: </strong>" + character.skin_color + "</li>"
      output += "<li><strong>Göz Rengi: </strong>" + character.eye_color + "</li>"
      output += "<li><strong>Doğum Yılı: </strong>" + character.birth_year + "</li>"
      output += "<li><strong>Cinsiyet: </strong>" + character.gender + "</li>"
      output += "</ul>";
      output += "</div>";
    });

    output += "</div>";

    document.getElementById("characters").innerHTML += output;
    $('#loader').fadeOut();
  });
}

getMovies();

getCharacters();