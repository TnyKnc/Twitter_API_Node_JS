//program çalışıyor.
console.log('Bot başladı');

//twit modülünü projemize dahil ettik.
var Twit = require('twit');

//config dosyasını projemize dahil ettik.
var config = require('./config');

//config dosyasının döndürdüğü verileri T değişkenine atadık.
var T = new Twit(config);

var tweet = {
    status: '#codingrainbow from node.js'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
    if (err) {
        console.log("Twit atmada hata!");
        console.log(err);
    }
    else {
        console.log("Twit atıldı :)");
        console.log(data)
    }
}