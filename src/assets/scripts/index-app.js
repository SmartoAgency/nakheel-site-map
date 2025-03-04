import "current-device";
import PinchZoom from "pinch-zoom-js";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


const pinData = {
  'sobha_hartland2': {
    title: 'Sobha Hartland 2',
    text: 'Sobha Hartland 2 is a green community enclosing mansions, 6-bedroom villas and 5-bedroom villas within a forest sanctuary of large lagoons. Nestled in a stunning development of 8 million Sq. Ft. with draped waterfronts, blue lagoons, and river, it embraces nature, water, open spaces, and lush landscaping. Discover apartments with views of vibrant Downtown Dubai.',
    img: './assets/images/sobha_hartland2.jpg',
  },
  'sobha_s': {
    title: 'The S',
    text: `The city’s most prized real estate adorns Sheikh Zayed Road, the power corridor of Dubai. Naturally, you belong here. Being so central also has its visual perks, with every apartment at The S oriented to offer stunning views whichever way you look.`,
    img: './assets/images/s/img.jpg',
    link: '',
  },
  'sobha_seaheaven': {
    title: 'Sobha SeaHaven',
    text: `THE OCEAN's YOUR PLAYGROUND. <br><br> Located in the heart of Dubai, take in the gorgeous views of the city’s beloved landmarks- iconic Palm Jumeirah, stunning Dubai Harbour and Marina skyline, prominent Ain Dubai and the regal Burj Al Arab. Sobha SeaHaven is an exciting sea-facing destination equidistant from the two international airports and a stone’s throw away from the most cherished landmarks of Dubai.`,
    img: './assets/images/seaheaven/img.jpg',
    link: '',
  },
  'sobha_verde': {
    title: 'Verde by Sobha',
    text: `Embrace a new kind of living in one of Dubai's most coveted districts - JLT, surrounded by tranquil lakes, thriving residential complexes, buzzing high streets and more. Verde by Sobha is one of the tallest residential towers offering picturesque views of the lush green meadows and emerald golf course. The uber-luxury homes are designed to suit the discerning tastes of the globe trotters with world-class amenities.`,
    img: './assets/images/verde/img.jpg',
    link: '',
  }, 
  'sobha_one': {
    title: 'Sobha One',
    text: 'Sobha One spreads its tapestry over five interlinked towers. Rising from 30 stories tall and hitting a crescendo of 65 stories, it’s one note after another that sings in chorus with the skyline. Rise high above and look at the stars. Soak in the stunning views of the city. Catch the sun rays when they rise and set. Do it all from the magnificent panoramic sky terrace in each tower.',
    img: './assets/images/one/img.jpg',
    link: '',
  },
  'sobha_reserve': {
    title: 'Sobha Reserve',
    text: 'An exquisite abode with a niche set of exquisite villas situated in the heart of an idyllic green luxury gated community that encompasses bouldering walls, exotic flower-patterned clusters, and tree-lined walkways.',
    img: './assets/images/reserve/img.jpg', 
    link: '',
  },
  'sobha_hartland': {
    title: 'Sobha Hartland',
    text: 'Community living that represents a whole new definition of luxury. Experience inspired living in an 8 million sq. ft. waterfront community of luxurious apartments, villas, and townhouses in Sobha Hartland Dubai.',
    img: './assets/images/hartland/hartland-1.jpg',
    link: '',
  },
  'sobha_solis' : {
    title: 'Sobha Solis',
    text: 'Apremium residential community in Dubai’s Motor City, designed to inspire active living and holistic well-being. Offering thoughtfully crafted 1 to 3-bedroom apartments, the project integrates curated amenities like co-working spaces, a library, Zen gardens, and fitness zones. Sobha Solis combines serene natural settings with modern conveniences, creating a lifestyle where health, community, and innovation come together seamlessly. Experience elevated living with Sobha Solis, where every detail enhances your life.',
    img: './assets/images/solis/sobha-solis.webp',
    link: 'https://sobharealty.com/properties-in-dubai/sobha-solis/',
  },
  'sobha_orbis' : {
    title: 'Sobha Orbis',
    text: 'Located in Dubai’s vibrant Motor City, offers a luxurious urban lifestyle through its meticulously crafted 1, 1.5, and 2-bedroom apartments. Spanning elegant living spaces ranging from 547 to 984 sq. ft., this seven-tower development is designed for modern living. Sobha Orbis seamlessly combines premium design, contemporary amenities, and the charm of a thriving community, creating a perfect sanctuary for those seeking sophistication and comfort in every detail',
    img: './assets/images/orbis/Sobha Orbis.jpg',
    link: 'https://www.sobharealty.com/properties-in-dubai/sobha-orbis/',
  },
  'sobha_elwood' : {
    title: 'Sobha Elwood',
    text: 'A residential haven in Dubailand, featuring an exquisite selection of 4, 5, and 6-bedroom villas surrounded by lush greenery. Combining luxury with nature, this community offers an amphitheater, botanical gardens, and serene outdoor spaces, making it a sanctuary of tranquility and elegance. Designed for families seeking a verdant lifestyle, Sobha Elwood redefines upscale living with its unique blend of adventure and opulence',
    img: './assets/images/elwood/elwood.webp',
    link: 'https://sobhaelwoodapp.com/',
  },
  'sobha_siniya_island' : {
    title: 'Sobha Siniya Island',
    text: 'An exclusive island retreat in Umm Al Quwain, offering luxurious 4, 5, and 6-bedroom residences across 16.1 million square feet of pristine landscapes. This serene community boasts an ecological park, a sophisticated yacht club, and breathtaking sea views. With unmatched tranquility and upscale amenities, Sobha Siniya Island blends nature’s untouched beauty with modern elegance, creating a haven for those seeking an unparalleled living experience',
    img: './assets/images/siniya-island/Sobha Siniya Island.jpg',
    link: 'https://www.sobharealty.com/our-communities/sobha-siniya-island/',
  }
};

document.body.addEventListener('click', (evt) => {

  const isPOpup = evt.target.closest('.popup');
  if (!isPOpup && document.querySelector('.popup').classList.contains('active')) {
    return document.querySelector('.popup').classList.remove('active');
  }
  const target = evt.target.closest('[data-link]');
  if (!target) return;
  const popup = document.querySelector('.popup');

  const data = pinData[target.dataset.id];

  popup.querySelector('.popup__text div').textContent = data.title;
  popup.querySelector('.popup__text p').innerHTML = data.text;
  popup.querySelector('.popup__img').src = data.img;
  popup.querySelector('a').href = target.dataset.link;



  const { width,height } = popup.getBoundingClientRect();

  const { top, left } = target.getBoundingClientRect();

  console.log(top);
  console.log(top, window.innerHeight - height / 2);
  
  
  
  const leftOffset = Math.min(left, window.innerWidth - width / 2);
  const topOffset = Math.min(top, window.innerHeight);


  popup.style.left = Math.max(leftOffset, width/2)+'px';
  popup.style.top = Math.max(topOffset, height)+'px';

  popup.classList.add('active');
  // window.open(target.dataset.link, '_blank');
});

if (Array.from(document.documentElement.classList).join('').match(/mobile|tablet/)) {
  setTimeout(() => {
    // document.querySelector('g[data-link]').scrollIntoView({ behavior: "smooth",block: 'center'});
    document.querySelector('.map-wrapper').scrollTo( {
      left: 250,
      behavior: 'smooth'
    });
  }, 2000);


  // let el = document.querySelector('.map-wrapper');
  // let pz = new PinchZoom(el, {
  //   lockDragAxis: true,
  //       use2d: false,
  //       minZoom: 1,
  //       draggableUnzoomed: false
  // });
  // alert('PAD');
}

document.body.addEventListener('click', (evt) => {
  const target = evt.target.closest('[data-close-popup]');
  if (!target) return;
  const popup = document.querySelector('.popup');
  popup.classList.remove('active');
});



function setMapOverflow() {
  const mapRatio = 1009 / 1920;
  const screenRatio = window.innerHeight / window.innerWidth;
  const map = document.querySelector('.map-wrapper');
  const svg = document.querySelector('.map-wrapper svg');
  if (screenRatio < mapRatio) {
    svg.style.height = 'auto';
    svg.style.width = '100vw';
    map.classList.add('landscape');
    map.classList.remove('portrait');
  } else {
    svg.style.height = '100vh';
    svg.style.width = 'auto';
    map.classList.remove('landscape');
    map.classList.add('portrait');
  }
}

if (window.screen.width > 1024) {
  setMapOverflow();
  grabToHorizontalScrollMap();
  window.addEventListener('resize', setMapOverflow);
}




function grabToHorizontalScrollMap() {
  const map = document.querySelector('.map-wrapper');
  let isDown = false;
  let startX;
  let scrollLeft;

  map.addEventListener('mousedown', (e) => {
    if (map.classList.contains('landscape')) return;
    isDown = true;
    startX = e.pageX - map.offsetLeft;
    scrollLeft = map.scrollLeft;
  });
  map.addEventListener('mouseleave', () => {
    if (map.classList.contains('landscape')) return;
    isDown = false;
  });
  map.addEventListener('mouseup', () => {
    if (map.classList.contains('landscape')) return;
    isDown = false;
  });
  map.addEventListener('mousemove', (e) => {
    if (map.classList.contains('landscape')) return;
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - map.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    map.scrollLeft = scrollLeft - walk;
  });  
}

