// Import Viewer and Worker
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface ResumeViewerProps {
  fileUrl: string;
}

const ResumeViewer = ({ fileUrl }: ResumeViewerProps) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="mt-8 border border-border rounded-lg h-[750px] overflow-hidden">
      {/* 
        This is the correct API.
        The Worker component takes the URL and provides the context.
        The Viewer component is nested inside it.
      */}
      <Worker workerUrl="/pdf.worker.min.js">
        <Viewer
          fileUrl={fileUrl}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default ResumeViewer;