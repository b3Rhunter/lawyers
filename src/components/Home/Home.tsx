import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { MemberBenefits } from "./MemberBenefits/MemberBenefits";
import { ProjectOverview } from "./Project Overview/ProjectOverview";
import "./Home.css";



export const Home = () => {
  return (
    <>

      <Header />
      <ProjectOverview/>

      <Footer />
    </>
  );
}