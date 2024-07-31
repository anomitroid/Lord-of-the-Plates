import { createBox, createImg, createSection, createTextBox } from './dom-elements';
import img from './img/qr.png';

export const contactSection = (parent) => {
    const wrapper = createBox (parent, 'wrapper contact-wrapper');
    wrapper.setAttribute ('id', 'contact');

    const section = createSection (wrapper, 'conatct');

    const title = createTextBox (section, 'h1', 'contact__title', 'Contact');
    const tel = createTextBox (section, 'p', 'contact__tel', '(+ 91) 93304 72460');
    const btcImg = createImg (section, 'contact__btc-img', img);
    const btc = createTextBox (section, 'p', 'contact__btc', 'https://qrfy.io/r/CTJ32mNLNv');
}