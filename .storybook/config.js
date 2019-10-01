import { configure } from '@storybook/vue'; 

import '../src/assets/css/tailwind.css';

const stories = require.context('./stories', true, /\.story.js$/);

function loadStories() {
    stories.keys().forEach(filename => stories(filename));
}

configure(loadStories, module);