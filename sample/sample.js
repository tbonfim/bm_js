(
    function(){
        this.findEpisode = function(){
            var inputValue = document.getElementById("episodeName").value;
            var episode = new BlackMirrorEpisodesHelper(inputValue);

            console.log(episode.currentEpisode);
        }   
    }()
);