import { createBox, createSection, createTextBox } from './dom-elements';

export const locationSection = (parent) => {
    const wrapper = createBox (parent, 'wrapper location-wrapper');
    wrapper.setAttribute ('id', 'location');

    const section = createSection (wrapper, 'location');

    const title = createTextBox (section, 'h1', 'location__title', 'Location');
    const address = createTextBox (section, 'p', 'location__address', 'Bag End Bistro\r\n22 Rivendell Lane\r\nShirewood, Middle-earth, ME 12345\r\nKingdom of Gondor');
    const hours = createTextBox (section, 'p', 'location__hours', 'Dine-in & Ride-thru (the Shire)\r\nOpen 24/7');
    const docking = createTextBox (section, 'p', 'Parking', 'Parking available\r\n0.1k sats/tonne/min');
}