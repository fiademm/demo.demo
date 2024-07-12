import { AuthLinkButton, LinkButton } from '../components/buttons';
import { Sidebar, MiniSidebar } from "../components/sidebars";

const Resources = () => {
  return (
    <div className="main-screen-container">
        <section classname='sidebar-container'>
            <Sidebar />
        </section>
        <section classname='content-container'>Resources</section>
    </div>
  );
}

export default Resources;