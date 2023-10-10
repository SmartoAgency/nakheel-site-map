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
  }
};

document.body.addEventListener('click', (evt) => {
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
  
  const leftOffset = Math.min(left, window.innerWidth - width / 2);
  const topOffset = Math.min(top, window.innerHeight - height / 2);


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
