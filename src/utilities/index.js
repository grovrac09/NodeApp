const musicArr = [];

class Music {
    constructor(band, song) {
        this.band = band;
        this.song = song;
    }

    add() {
        musicArr.push(this)
    }
}

module.exports = {Music, musicArr};