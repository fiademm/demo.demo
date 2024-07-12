import { AuthLinkButton, LinkButton } from '../components/buttons';
import Sidebar from "../components/sidebars";

const Reports = () => {
  return (
    <div className="main-screen-container">
        <section classname='sidebar-container'>
            <Sidebar />
        </section>
        <section classname='content-container'>Reports</section>
    </div>
  );
}

export default Reports;