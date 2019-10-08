export default {
    name: 'NavbarComponent',
    props: {
        config: {
            type: Object,
            required: true
        },
        hasSidebar: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            brand: this.config.brand,
            className: this.config.class,
            links: this.config.links,
        };
    },
    methods: {
        sidebarClick() {
            let sidebarMenuDiv = document.querySelectorAll('div.sidebarmenu-icon > div');
            let sidebarButton = document.querySelector('.sidebarmenu-icon');

            sidebarMenuDiv.forEach((div) => {
                div.classList.remove('no-animation');
            });
            sidebarButton.classList.toggle('active');
        }
    }
}