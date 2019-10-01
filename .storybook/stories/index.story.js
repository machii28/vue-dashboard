import {storiesOf} from '@storybook/vue';
import './../../src/assets/css/tailwind.css';
import NavbarComponent from './../../src/components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

library.add(faCoffee, faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);

storiesOf('NavbarComponent', module).add('Default', () => {
    return {
        components: { 'navbar-component' :NavbarComponent },
        template: `<navbar-component :config="navbarConfig"></navbar-component>`,
        data: () => ({
            navbarConfig: {
                brand: 'Dashboard Component',
                class: 'flex items-center justify-between flex-wrap p-6 bg-black',
                links: [
                    {
                        url: 'javascript:void(0)',
                        name: 'Test',
                        class: "ml-5 text-white",
                        position: 'left'
                    },
                    {
                        url: 'javascript:void(0)',
                        name: 'Test',
                        class: 'ml-5 text-white',
                        position: 'left'
                    },
                    {
                        url: 'javascript:void(0)',
                        name: 'Test Right',
                        class: 'ml-5 text-white',
                        position: 'right'
                    },
                ]
            }
        }),
        methods: '',
    }
});