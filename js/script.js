
model = {
  searchMovie: function(){
    var httpRequest = new XMLHttpRequest();
    var movie = document.getElementById('searchbar').value;
    console.log(movie);
    var url = 'http://www.omdbapi.com/?t=' + movie;
    view.hideFail();

    httpRequest.onreadystatechange = function(){
      view.loaderFlip('inline');
      if(this.readyState === 4 && this.status === 200){
        console.log('good');
        view.loaderFlip('none');
        var filmInfo = JSON.parse(this.responseText);
        view.updateFilmObj(filmInfo);
      }else if(this.status > 200){
        
      }
    };

    httpRequest.open('GET', url, true);
    httpRequest.send(null); 
    return false;  
  }


};

view = {
  turnOnFacts: function(){
    document.getElementById('belowheader').style.display = 'block';
  },

  updateFilmObj: function(obj){
    this.turnOnFacts();

    //Movie title
    document.getElementById('title').innerHTML = obj.Title;

    //Year
    var filmYear = obj.Year;
    document.getElementById('year').innerHTML = filmYear;

    //Runtime
    var filmRuntime = obj.Runtime.substr(0, obj.Runtime.length - 4);
    document.getElementById('runtime').innerHTML = filmRuntime;

    //Metacritic score
    var filmMMScore = obj.Metascore + '%';
    document.getElementById('metacritic').innerHTML = filmMMScore;   

    //Metacritic score
    var filmDirector = obj.Director;
    document.getElementById('director').innerHTML = filmDirector;

    //Summary
    var filmSummary = obj.Plot;
    document.getElementById('summary-summary').innerHTML = filmSummary;

    var filmActor = obj.Actors;
    document.getElementById('summary-actor').innerHTML = filmActor;

    var filmGenre = obj.Genre;
    document.getElementById('summary-genre').innerHTML = filmGenre;

    var filmWriter = obj.Writer;
    document.getElementById('summary-writer').innerHTML = filmWriter;
  },

  loaderFlip: function(loaderswitch){
    document.getElementById('loading').style.display = loaderswitch; 
  },

  hideFail: function(){
    document.getElementById('title').innerHTML = '';    
  },

  failedSearch: function(obj){
    document.getElementById('title').innerHTML = "Couldn't reach server. Please try again.";
  }
};

controller = {};