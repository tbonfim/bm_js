(
    function(){
        this.findEpisode = function(){
            var inputValue = document.getElementById("episodeName").value;
            new BlackMirrorEpisodesHelper(inputValue);
        }   
    }()
);