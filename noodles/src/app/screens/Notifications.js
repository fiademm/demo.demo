import { AuthLinkButton, LinkButton } from '../components/buttons';
import Sidebar from "../components/sidebars";

const Notifications = () => {
  return (
    <div className="main-screen-container">
        <section classname='sidebar-container'>
            <Sidebar />
        </section>
        <section classname='content-container'>Notifications</section>
    </div>
  );
}

export default Notifications;