import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';

// URL directa de descarga de Google Drive
const resumeLink = 'https://drive.google.com/uc?export=download&confirm=t&id=1UQrRzv4B0_OMxjqFt_kFrcjVRvYeUTsP';

const Resume = () => {
  const handleDownload = (e) => {
    try {
      window.open(resumeLink, '_blank');
    } catch (error) {
      console.error('Error al abrir el enlace:', error);
      alert('No se pudo abrir el curriculum. Copia este enlace en tu navegador:\n' + resumeLink);
    }
  };

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
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          onClick={handleDownload}
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>
      </div>
    </BaseLayout>
  );
};

export default Resume;
