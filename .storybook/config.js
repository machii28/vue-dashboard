import {configure} from '@storybook/vue';
import Vue from 'vue';

new Vue({
    el: '#app',
    components: {

    }
});

function loadStories() {

}

configure(loadStories, module);