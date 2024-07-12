import { AuthLinkButton, LinkButton } from '../components/buttons';
import { Sidebar, MiniSidebar } from "../components/sidebars";

const Tasks = () => {
  return (
    <div className="main-screen-container">
        <section classname='sidebar-container'>
            <Sidebar />
        </section>
        <section classname='content-container'>Tasks</section>
    </div>
  );
}

export default Tasks;