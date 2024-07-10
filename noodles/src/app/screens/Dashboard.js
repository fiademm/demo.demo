import { AuthLinkButton, LinkButton } from '../components/buttons';
import Sidebar from '../components/sidebars';

const Dashboard = () => {
  return (
    <div className="main-screen-container">
        <section classname='sidebar-container'>
            <Sidebar />
        </section>
        <section classname='content-container'></section>
    </div>
  );
}

export default Dashboard;