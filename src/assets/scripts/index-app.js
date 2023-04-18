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
  'sobha_seaheaven': {
    title: 'Sobha SeaHaven',
    text: 'At Sobha SeaHaven, you can experience the euphoria of a unique oceanfront lifestyle. With exclusive amenities and lush landscaping, this is a secluded place of luxury, peace and beauty. Sobha SeaHaven is located in the center of the sea gate, making it easy to anchor and explore the most exclusive destinations.',
    img: './assets/images/seaheaven/img.jpg',
    link: '',
  },
  'sobha_verde': {
    title: 'Verde by Sobha',
    text: 'Verde by Sobha at Jumeirah Lake Towers, Dubai presents luxury 1, 2 & 3 bedroom apartments developed by Sobha Group. The developer is always known for new designs, relaxing aesthetics and unparalleled architecture beyond your imagination.',
    img: './assets/images/verde/img.jpg',
    link: '',
  }, 
  'sobha_one': {
    title: 'Sobha One',
    text: 'Sobha One spreads its tapestry over five interlinked towers. Rising from 30 stories tall and hitting a crescendo of 65 stories, it’s one note after another that sings in chorus with the skyline.',
    img: './assets/images/one/img.jpg',
    link: '',
  },
  'sobha_reserve': {
    title: 'Sobha Reserve',
    text: 'An exquisite abode with a niche set of exquisite villas situated in the heart of an idyllic green luxury gated community that encompasses bouldering walls, exotic flower-patterned clusters, and tree-lined walkways. The size of each villa starts from 4900 sq. ft.',
    img: './assets/images/reserve/img.jpg',
    link: '',
  },
  'sobha_hartland': {
    title: 'Sobha Hartland',
    text: 'Community living that represents a whole new definition of luxury. Experience inspired living in an 8 million sq. ft. waterfront community of luxurious apartments, villas, and townhouses in Sobha Hartland Dubai.',
    img: './assets/images/hartland/hartland-1.webp',
    link: '',
  }
};

document.body.addEventListener('click', (evt) => {
  const target = evt.target.closest('[data-link]');
  if (!target) return;
  const popup = document.querySelector('.popup');

  const data = pinData[target.dataset.id];

  popup.querySelector('.popup__text div').textContent = data.title;
  popup.querySelector('.popup__text p').textContent = data.text;
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
