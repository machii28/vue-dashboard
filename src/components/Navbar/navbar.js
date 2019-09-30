export default {
    props: {
        config: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            brand: this.config.brand,
            className: this.config.class,
            links: this.config.links
        };
    }
}