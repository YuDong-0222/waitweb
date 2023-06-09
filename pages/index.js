import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <Explore />
    </div>
    <div className="relative">
      <WhatsNew />
    </div>
    <GetStarted />
    <div className="relative">
      <Insights />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
