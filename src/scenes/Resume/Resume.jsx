import { useState } from 'react';
import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';

// URL directa de descarga de Google Drive
const resumeLink = 'https://drive.google.com/uc?export=download&confirm=t&id=1UQrRzv4B0_OMxjqFt_kFrcjVRvYeUTsP';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async (e) => {
    e.preventDefault();
    
    // Evitar múltiples descargas simultáneas
    if (isDownloading) {
      alert('⚠️ Ya hay una descarga en proceso. Por favor espera...');
      return;
    }
    
    setIsDownloading(true);
    setError(null);
    
    try {
      console.log('🔄 Verificando disponibilidad del archivo...');
      
      // Verificar si la URL es válida antes de intentar descargar
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout de 5 segundos
      
      const response = await fetch(resumeLink, { 
        method: 'HEAD',
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (response.status === 404) {
        throw new Error('ARCHIVO_NO_ENCONTRADO');
      }
      
      if (!response.ok) {
        throw new Error(`ERROR_${response.status}`);
      }
      
      // Si todo está bien, proceder con la descarga
      console.log('✅ Archivo disponible, iniciando descarga...');
      
      // Crear un enlace temporal para la descarga
      const link = document.createElement('a');
      link.href = resumeLink;
      link.download = 'CV_Luis_Sancho.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Guardar en localStorage que se descargó exitosamente
      localStorage.setItem('ultimaDescargaExitosa', new Date().toISOString());
      
    } catch (error) {
      console.error('❌ Error en descarga:', error);
      
      let mensajeError = '';
      let tituloError = '';
      
      if (error.name === 'AbortError') {
        tituloError = '⏱️ Tiempo de espera agotado';
        mensajeError = 'El servidor tardó demasiado en responder. Verifica tu conexión a internet.';
      } else if (error.message === 'ARCHIVO_NO_ENCONTRADO') {
        tituloError = '📄 Archivo no encontrado';
        mensajeError = 'El curriculum no está disponible en este momento. Por favor, contacta al administrador.';
      } else if (error.message.includes('ERROR_')) {
        const statusCode = error.message.split('_')[1];
        tituloError = `⚠️ Error ${statusCode}`;
        mensajeError = `El servidor respondió con el error ${statusCode}. Intenta nuevamente más tarde.`;
      } else {
        tituloError = '❌ Error de descarga';
        mensajeError = 'Ocurrió un problema al descargar el archivo. Intenta nuevamente.';
      }
      
      setError({ titulo: tituloError, mensaje: mensajeError });
      
      // Opción alternativa: abrir en nueva pestaña
      const abrirEnNavegador = window.confirm(
        `${tituloError}\n\n${mensajeError}\n\n¿Quieres abrir el enlace directamente en el navegador?`
      );
      
      if (abrirEnNavegador) {
        window.open(resumeLink, '_blank');
      }
      
    } finally {
      setIsDownloading(false);
      
      // Limpiar error después de 5 segundos
      setTimeout(() => {
        setError(null);
      }, 5000);
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

        {error && (
          <div className={s.errorContainer}>
            <div className={s.errorMessage}>
              <strong>{error.titulo}</strong>
              <p>{error.mensaje}</p>
            </div>
          </div>
        )}

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}>
            {isDownloading ? ' verificando...' : ' download resume'}
          </span>
          <span className={s.filename}>.pdf</span>
        </Button>
      </div>
    </BaseLayout>
  );
};

export default Resume;
