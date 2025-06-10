import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker path
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface ResumeViewerProps {
  fileUrl: string;
}

const ResumeViewer = ({ fileUrl }: ResumeViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    // We use a class selector to find the container element
    const container = document.querySelector('.resume-container');
    if (container) {
      setContainerWidth(container.clientWidth);
    }
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    // This class is used by the useEffect hook to get the component's width
    <div className="resume-container mt-8 border border-border rounded-lg overflow-hidden">
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="p-4 text-center text-text-secondary">Loading PDF…</div>}
        error={<div className="p-4 text-center text-red-500">Failed to load PDF. Please try downloading it instead.</div>}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={containerWidth} // Scale page to fit the container
            renderTextLayer={true} // This makes the text selectable and copyable
          />
        ))}
      </Document>
    </div>
  );
};

export default ResumeViewer;