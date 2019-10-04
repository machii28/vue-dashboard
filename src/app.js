import NavbarComponent from './components/Navbar';

export default {
    components: {
        NavbarComponent
    },
    data() {
        return {
            navbarConfig: {
                brand: 'Dashboard Component',
                class: 'bg-teal-900 text-white',
                links: [
                    {
                        url: 'javascript:void(0)',
                        name: 'About',
                        class: "",
                        position: 'left'
                    },
                    {
                        url: 'javascript:void(0)',
                        name: 'Author',
                        class: '',
                        position: 'left'
                    },
                ]
            }
        }
    }
}