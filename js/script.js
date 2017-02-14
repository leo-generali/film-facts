
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
        console.log('bad');
      }
    };
    httpRequest.open('GET', url, true);
    httpRequest.send(null); 
    return false;  
  },


};

view = {
  init: function(){
    document.getElementById('searchbar-go').addEventListener('click', model.seachMovie);
  },

  updateFilmObj: function(obj){
    document.getElementById('title').innerHTML = obj.Title;
  }
};

controller = {};



view.init();