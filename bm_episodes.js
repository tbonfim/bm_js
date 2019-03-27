(function(){
    this.BlackMirrorEpisodesHelper = function(){
        if( arguments[0] && typeof arguments[0] === "string") {
            findEpisode(arguments[0]);
        }
        else {
            throw Error('Could\'t create BlackMirrorEpisodesHelper instance. Make sure the episode name is passed');
        }
    };
}());