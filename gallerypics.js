const landschapFotos = [
  'https://creatingstories.imgix.net/2019/08/st-mary-lake-ryan-stone-jGs0ZH-_INs-unsplash-e1577112888461.jpg?auto=formaat&dpr=2&h=740&w=1440&lossless=1',
  'https://i.ytimg.com/vi/TW1VEE6mtnc/maxresdefault.jpg',
  'https://www.kras.nl/wsmedia/afbeelding/004/203/243.500x375/158-159-van-kenia-tot-zuid_afrika-36485-36504-rondreis-38652043_zebras_serengeti_np.jpg',
  'https://mijnverrereizen.nl/wp-content/uploads/2019/10/list-image-159.jpeg',
  'https://www.parks-and-tribes.com/andes/water/san-rafael-waterfall.jpg',
  'https://blogbox.be/wp-content/uploads/2019/12/south-africa-1982418_1920.jpg',
  'https://cdn.indicium.nu/source/lonely-planet/inspiratie/2017_juni/marokko-618438630-pavliha.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Wadi-rum-woestijn.jpg',
  'https://i.pinimg.com/originals/66/4a/bf/664abf847595c5b784fb31ee07ef1660.jpg',
  'https://ae01.alicdn.com/kf/HTB11LmmOpXXXXaWapXXq6xXFXXXe/Wellyu-Custom-Grote-Fresco-3D-Hd-Zee-View-Rock-Strand-Landschap-Achtergrond-Muurschildering-Behang-Papel-De.jpg',
  'https://cdn.pixabay.com/photo/2017/11/25/12/46/tree-2976737_960_720.jpg',
  'https://colddeserts.files.wordpress.com/2017/04/cropped-arctic2.jpg',
  'https://2.bp.blogspot.com/-O9vCzUqZOgE/VK0xpuocDzI/AAAAAAAA0iQ/ivBAkF8zHOI/s1600/berg%2Bwallpaper%2Bmet%2Bbloemen%2Ben%2Buitzicht%2Bop%2Brivier%2Bbeneden%2Bin%2Bhet%2Bdal.jpg',
  'https://thumbs.werkaandemuur.nl/1/0bfbf1b1af33dae91a58ca3bd6826700/817x600/thumbnail/fit.jpg',
  'https://villagecraftandcandle.com/image/cache/data/products/mountain-lake-780x640.jpg',
  'https://cdn.reisfanaten.nl/gfx/b/natuur-italie-de-mooiste-landschappen-vind-je-hier-dolomieten-italie-2866652910.jpg',
  'https://cdn.reisfanaten.nl/gfx/b/natuur-italie-de-mooiste-landschappen-vind-je-hier-trentino-italie-4222766452.jpg',
  'https://cdn.reisfanaten.nl/gfx/b/natuur-italie-de-mooiste-landschappen-vind-je-hier-abruzzo-nationaal-park-1284760288.jpg',
  'https://www.plusonline.nl/sites/plusonline/files/nationale-landschappen.jpg',
  'https://media.deseretdigital.com/file/565b6b5783?crop%3Dtop%3A0%7Cleft%3A0%7Cwidth%3A640%7Cheight%3A420%26resize%3Dwidth%3A640%26order%3Dresize%2Ccrop%26c%3D14%26a%3D1dc0fe20',
  'https://geografie.nl/sites/geografie.nl/files/styles/image_dynamic_height/public/thomas-fields%20UNSPLASH%20Zuid-Amerika.jpg'
];

const plaatser = document.getElementById('kastie');

function fotoErop(url) {
  let item = document.createElement('div');
 item.className = 'item';
  let plaatje = document.createElement('img');
  plaatje.src = url;
  plaatje.alt = 'landschappen';
  item.append(plaatje);
  plaatser.append(item);
  }


  for(let i=landschapFotos.length; i>0;  i--) {
    let anderGetal = Math.floor (Math.random()*landschapFotos.length)
    fotoErop( landschapFotos[anderGetal] );
    landschapFotos.splice(anderGetal, 1);

  }
