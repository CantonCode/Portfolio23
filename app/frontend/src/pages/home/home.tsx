import About from "../../components/About/About";
import Intro from "../../components/Intro/Intro";
import JobContainer from "../../components/Jobs/JobContainer/JobContainer";
import ProjectCard from "../../components/Projects/ProjectCard/ProjectCard";
import ProjectGrid from "../../components/Projects/ProjectGrid/ProjectGrid";
import Socials from "../../components/Socials/Socials";
import Tiles from "../../components/Tiles/Tiles";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Mousewheel, Pagination, EffectFade  } from "swiper/modules";



function Home() {
    
    return (
      <div>
        {/* <Intro/>
        <About/>
        <JobContainer/>
        <ProjectGrid/>
        <Socials/> */}

<Swiper style={{height:'80vh',padding:'5rem'}}

      direction={'vertical'}
      spaceBetween={20}
      slidesPerView={1}
      mousewheel={{
        invert: false,
        sensitivity: 100,
        releaseOnEdges: true,
      }}
      modules={[Mousewheel,Pagination, EffectFade]}
      pagination={{
        clickable: true,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      speed={700}
      className="mySwiper"
    >
      <SwiperSlide><Intro/></SwiperSlide>
      <SwiperSlide><About/></SwiperSlide>
      <SwiperSlide><JobContainer/></SwiperSlide>
      <SwiperSlide><ProjectGrid/></SwiperSlide>
      ...
    </Swiper>
    <Socials/>
      </div>
        
  
      );
}


export default Home;
