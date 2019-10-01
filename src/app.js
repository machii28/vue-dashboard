import NavbarComponent from './components/Navbar';

export default {
    components: {
        NavbarComponent
    },
    data() {
        return {
            navbarConfig: {
                brand: 'Dashboard Component',
                class: 'flex items-center justify-between flex-wrap p-6 bg-black',
                links: [
                    {
                        url: 'javascript:void(0)',
                        name: 'About',
                        class: "ml-5 text-white",
                        position: 'left'
                    },
                    {
                        url: 'javascript:void(0)',
                        name: 'Author',
                        class: 'ml-5 text-white',
                        position: 'left'
                    },
                ]
            }
        }
    }
}