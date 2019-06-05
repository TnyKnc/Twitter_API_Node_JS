/* twit araması yapılan proje */

//program çalışıyor.
console.log('Bot başladı');

//twit modülünü projemize dahil ettik.
var Twit = require('twit');

//config dosyasını projemize dahil ettik.
var config = require('./config');

//config dosyasının döndürdüğü verileri T değişkenine atadık.
var T = new Twit(config);

//params değişkenine parametleri atadık
var params = {  
                q: 'NodeJS',  //aranacak veri
                count: 5  //sonuç sayısı
             }

//gerekli parametreleri kullanarak arama sonucunu döndüren kod bloğunu yazdık.
//(twit modülünü kullanarak)
T.get('search/tweets', params, gotData);

//twitleri çektik.
function gotData(err, data, response) {
    //aranan twitlerin içeriklerini tweets değişkenine atadık.
    var tweets = data.statuses;
    //twitleri console ekranına bastırdık.
    for (var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text);
    }

    //twit bilgilerini çektik.
    //console.log(data)
  }