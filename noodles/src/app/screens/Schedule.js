import { AuthLinkButton, LinkButton } from '../components/buttons';
import Sidebar from "../components/sidebars";

const Schedule = () => {
  return (
    <div className="main-screen-container">
        <section classname='sidebar-container'>
            <Sidebar />
        </section>
        <section classname='content-container'>Schedule</section>
    </div>
  );
}

export default Schedule;