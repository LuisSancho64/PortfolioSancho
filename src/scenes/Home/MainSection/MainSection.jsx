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
           />
        </div>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> LUIS SANCHO</strong>
        </h1>

        <div className={s.typewriter} style={{ 
          minHeight: '60px', 
          position: 'relative',
          width: '100%'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%'
          }}>
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
      </div>

      <div className={s.spacer} />

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
        width="396"
        height="400"
      />
    </section>
  );
};

export default MainSection;