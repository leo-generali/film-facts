
model = {
  searchMovie: function(){
    var httpRequest = new XMLHttpRequest();
    var movie = document.getElementById('searchbar').value;
    console.log(movie);
    var url = 'http://www.omdbapi.com/?t=' + movie //+ '&y=&plot=short&r=json';

    httpRequest.onreadystatechange = function(){
      if(this.readyState === 4){
        console.log('good');
        view.loaderFlip('none');
        var filmInfo = JSON.parse(this.responseText);
        view.updateFilmObj(filmInfo);
      }else{
        view.loaderFlip('inline');
        if(this.status !== 200){
          view.loaderFlip('none');
          view.failedSearch();
        }
      }
    };
    httpRequest.open('GET', url, true);
    httpRequest.send(null); 
    return false;  
  },


};

view = {
  init: function(){
    
  },

  updateFilmObj: function(obj){
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
  },

  loaderFlip: function(loaderswitch){
    document.getElementById('loading').style.display = loaderswitch;    
  },

  failedSearch: function(obj){
    document.getElementById('title').innerHTML = "Couldn't reach server. Please try again.";
  }
};

controller = {};



view.init();