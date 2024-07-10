import { AuthLinkButton, LinkButton } from '../components/buttons';
import Sidebar from '../components/sidebars';

const Settings = () => {
  return (
    <div className="main-screen-container">
        <section classname='sidebar-container'>
            <Sidebar />
        </section>
        <section classname='content-container'>Settings</section>
    </div>
  );
}

export default Settings;