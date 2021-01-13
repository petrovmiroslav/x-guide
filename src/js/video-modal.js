import { lockScroll, unlockScroll } from "./scrollBlocker";

const Modal = document.querySelector('.video-modal');
const Links = document.querySelectorAll('.js-video-modal-button');
let modalIsOpen = false;


//let windTop = 0;

// let state = {
//   scrollLocked: false,
//   lockedOnMobile: false,
//   scrollAllowedOn: null
// };

// function setState(newState) {
//     state = {
//         ...state,
//         ...newState
//     };
// }

// function lockScrollDesktop() {
//     windTop = window.scrollY;
//     document.documentElement.classList.add('no-scroll');
//     //document.documentElement.classList.add('no-scroll-with-scrollbar');
//     document.documentElement.style.top = -windTop + 'px';
// }

// function unlockScrollDesktop() {
//     document.documentElement.classList.remove('no-scroll');
//     //document.documentElement.classList.remove('no-scroll-with-scrollbar');
//     document.documentElement.style.top = 0;
//     window.scrollTo(0, windTop);
// }

// function lockScroll(element) {
//     const { scrollLocked } = state;
//     if (scrollLocked) return;

//     lockScrollDesktop();
//     setState({
//         scrollLocked: true
//     });
// }

// function unlockScroll() {
//     const { scrollLocked, lockedOnMobile, scrollAllowedOn } = state;

//     if (!scrollLocked) return;

//     unlockScrollDesktop();

//     setState({
//         scrollLocked: false,
//         lockedOnMobile: false,
//         scrollAllowedOn: null
//     });
// }

export default function VideoModal () {
  Links.forEach(link => {
    link.addEventListener('click', toggleModal);
  });
}

function toggleModal (e) {
  e.preventDefault();
  modalIsOpen = !modalIsOpen;

  document.documentElement.classList.toggle('video-modal-open');
  //document.documentElement.classList.toggle('no-scroll-with-scrollbar');

  modalIsOpen
    ? lockScroll(Modal)
    : unlockScroll(Modal);
}