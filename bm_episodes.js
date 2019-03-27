(function(){
    this.BlackMirrorEpisodesHelper = function(){
        if( arguments[0] && typeof arguments[0] === "string") {
            this.currentEpisode = findEpisode(arguments[0]);
        }
        else {
            throw Error('Could\'t create BlackMirrorEpisodesHelper instance. Make sure the episode name is passed');
        }
    };
    function findEpisode (episodeName){
        if(episodeName === "" || !episodeName) {
            throw Error('Episode name cannot be empty or null');
        }
        var episodeObj = episodeList.filter(episode =>  episode.title.toLowerCase() === episodeName.toLowerCase()) [0];
        if (episodeObj === undefined) { 
            return "Not found";
        }
        return(episodeObj);  
    }
}());