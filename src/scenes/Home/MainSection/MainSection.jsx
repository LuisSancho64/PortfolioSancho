import { LazyLoadImage } from 'react-lazy-load-image-component';
import handIcon from '../../../assets/hand.png';
import homeMainIcon from '../../../assets/home-main.png';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import s from './MainSection.module.scss';

const MainSection = () => {
  return (
    <section className={s.content}>
      
      <div className={s.header}>
        <div className={s.greetingContainer}>
          <h2 className={s.title}>
            Welcome!
          </h2>
          <img 
             src={handIcon}
             className={s.handIcon}
             alt="hand"
           />
        </div>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> LUIS SANCHO</strong>
        </h1>

        {/* 🔥 FIX: quitamos absolute y dejamos flujo natural */}
        <div className={s.typewriter}>
          <Typewriter
            strings={[
              'Continuously Learning',
              'Full Stack Developer',
            ]}
            wrapperClassName={s.typewriterInner}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <div className={s.spacer} />

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
