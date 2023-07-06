import { AboutMe } from "../../components";
import About from "../../components/About/About";
import Intro from "../../components/Intro/Intro";
import JobContainer from "../../components/Jobs/JobContainer/JobContainer";
import ProjectCard from "../../components/Projects/ProjectCard/ProjectCard";
import ProjectGrid from "../../components/Projects/ProjectGrid/ProjectGrid";
import Socials from "../../components/Socials/Socials";
import Tiles from "../../components/Tiles/Tiles";


function Home() {
    
    return (
      <div>
        {/* <Intro/>
        <About/> */}
        <ProjectGrid/>
        <JobContainer/>
        <Socials/>
      </div>
        
  
      );
}


export default Home;
