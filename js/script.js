
model = {
  searchMovie: function(){
    var httpRequest = new XMLHttpRequest();
    var movie = document.getElementById('searchbar').value;
    console.log(movie);
    var url = 'http://www.omdbapi.com/?t=' + movie //+ '&y=&plot=short&r=json';

    httpRequest.onreadystatechange = function(){
      if(this.readyState === 4){
        console.log('good');
        var filmInfo = JSON.parse(this.responseText);
        view.updateFilmObj(filmInfo);
      }else{
        view.failedSearch();
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

    //Runtime

    var filmRuntime = obj.Runtime.substr(0, obj.Runtime.length - 4);
    document.getElementById('runtime').innerHTML = filmRuntime;
  },

  failedSearch: function(obj){
    document.getElementById('title').innerHTML = "Couldn't reach server. Please try again.";
  }
};

controller = {};



view.init();