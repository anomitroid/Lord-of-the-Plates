import { createBox, createSection, createTextBox } from "./dom-elements";

export const storySection = (parent) => {
    const wrapper = createBox (parent, 'wrapper story-wrapper');
    wrapper.setAttribute ('id', 'story');

    const section = createSection (wrapper, 'story');

    const title = createTextBox (section, 'h1', 'story__title', 'Our Story');
    const description = createTextBox (section, 'p', 'story__desc', 
        `In the heart of a bustling city, a visionary chef named Elrond Greenleaf opened a magical eatery called "Lord of the Plates." 
        Inspired by epic tales from Middle-earth, each dish was a culinary adventure. 
        From "Gondorian Grills" to "Shire Sweets," patrons felt transported to Tolkien's world. 
        The restaurant quickly became legendary, a fellowship of food lovers united by their love for both gastronomy and fantasy.`
    );
}