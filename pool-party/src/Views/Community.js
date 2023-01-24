import NavigationBar from '../Modules/NavigationBar';
import Footer from '../Modules/Footer';
import CommunityBody from '../Modules/CommunityBody';
import SmallHeader from '../Modules/SmallHeader';


function Community() {
  return (
    <div id="Community">
        <NavigationBar />
        <SmallHeader />
        <CommunityBody />
        <Footer />
    </div>
  );
}

export default Community;
