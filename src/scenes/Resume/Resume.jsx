import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';

// Enlace de descarga directa de Google Drive
const resumeLink = 'https://drive.google.com/uc?export=download&id=1YE8nwEwkHvyrjgsPo4CJCxVq9dDRLXxp';

const Resume = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>
          <div className={s.filesImg}>
            <FilesIcon />
          </div>
          {/* 🔥 BOTÓN CON ESTILO ORIGINAL - Usando className="primary" como estaba 🔥 */}
          <Button
            style={{ margin: 'auto', width: '15rem' }}
            className="primary"
            href={resumeLink}
            download="Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon fill="#fff" />
            <span className={s.downloadText}>DOWNLOAD RESUME</span>
            <span className={s.filename}>.PDF</span>
          </Button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
