import {
  Features,
  Footer,
  Hero,
  InfoCard,
  Team,
  Testimonials,
} from "components";

const Landing = ({ isLogin }) => {
  return (
    <>
      <Hero isLogin={isLogin} />
      <Features />
      <InfoCard />
      <Testimonials />
      <Team />
      <Footer />
    </>
  );
};

export default Landing;
