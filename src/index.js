import './css/normalize.css';
import './css/style.css';
import './css/backgrounds.css';
import { generateHeader } from './dom-gen-header.js';
import { welcomeSection } from './dom-gen-welcome.js';
import { storySection } from './dom-gen-story.js';
import { menuSection } from './dom-gen-menu.js';
import { locationSection } from './dom-gen-location.js';
import { contactSection } from './dom-gen-contact.js';
import { generateFooter } from './dom-gen-footer.js';

function generateDOM () {
    const _body = document.querySelector ('body');
    const _main = document.createElement ('main');

    generateHeader (_body);
    _body.appendChild (_main);
    welcomeSection (_main);
    storySection (_main);
    menuSection (_main);
    locationSection (_main);
    contactSection (_main);
    generateFooter (_main);
};

generateDOM ();