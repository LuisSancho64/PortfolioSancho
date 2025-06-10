import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Luis Sancho, </span>
        <br />a software engineer currently based in{' '}
        <span className={s.purple}>Ambato, Ecuador.</span>
        <br />
        <br />
        I have a third level degree in Software Engineering
        <br />
        Some courses with international recognition.
        <br />
        <br />
        My hobbies beyond programming:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Playing Games
        </li>
        <li className={s.aboutActivity}>
          - Djing / Musical Production
        </li>
        <li className={s.aboutActivity}>
          - Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
