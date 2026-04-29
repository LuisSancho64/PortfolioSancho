import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';

// Usar el enlace de vista previa - funciona siempre
const resumeLink = 'https://drive.google.com/file/d/1UQrRzv4B0_OMxjqFt_kFrcjVRvYeUTsP/view';

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

          {/* 🔥 BOTÓN CORREGIDO - Usa la clase de CSS Modules */}
          <Button
            className={s.downloadBtn}
            href={resumeLink}
            target="_blank"
          >
            <DownloadIcon />
            <span className={s.downloadText}>DOWNLOAD RESUME</span>
            <span className={s.filename}>.PDF</span>
          </Button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
