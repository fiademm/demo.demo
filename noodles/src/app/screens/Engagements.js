import { AuthLinkButton, LinkButton } from '../components/buttons';
import { Sidebar, MiniSidebar } from "../components/sidebars";

const Engagements = () => {
  return (
    <div className="main-screen-container">
        <section classname='sidebar-container'>
            <Sidebar />
        </section>
        <section classname='content-container'>Engagements</section>
    </div>
  );
}

export default Engagements;