(function(){
    this.findEpisode = function(){
        var inputValue = document.getElementById("episodeName").value;
        var episode = new BlackMirrorEpisodesHelper(inputValue);

        var oldContent = document.querySelector('.wrapper');
        if (oldContent) {
            oldContent.remove();
        }

        var target = document.querySelector('#container');
        var div = document.createElement('div');
        div.classList.add('wrapper');

        if (episode.currentEpisode.hasOwnProperty('description') && episode.currentEpisode.hasOwnProperty('image')){
            div.innerHTML = "<img src='"+ episode.currentEpisode.image+"' />";
            div.innerHTML += "<p class='description'>" + episode.currentEpisode.description+ "</p>";
        }
        else {
            div.innerHTML = "<div class='notFound'>Not found </div>";
        }

        target.parentNode.insertBefore( div, target.nextSibling );
    }   
}());