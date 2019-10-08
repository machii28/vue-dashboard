import NavbarComponent from './components/Navbar';
import SidebarComponent from './components/Sidebar';
import NavbarConfig from './config/navbar.config.json';

export default {
    components: {
        NavbarComponent,
        SidebarComponent
    },
    data() {
        return {
            navbarConfig: NavbarConfig,
        }
    }
}