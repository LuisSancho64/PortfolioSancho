import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';

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

          {/* 🔥 SOLO usamos nuestra clase (sin romper estilos internos) */}
          <Button
            className={`${s.downloadBtn} primary`}
            href={resumeLink}
            target="_blank"
          >
            <DownloadIcon />
            <span className={s.downloadText}> download resume</span>
            <span className={s.filename}>.pdf</span>
          </Button>

        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
