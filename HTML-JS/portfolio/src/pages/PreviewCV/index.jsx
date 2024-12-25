import React, { useState } from "react";
import { Link } from "react-router-dom";

import useDownloadCV from "@hooks/useDownloadCV";

import { CV } from "@constants/url";
import { Button } from "@components/ui";

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { PreviewCVStyle } from "@components/styles";
import classNames from "classnames/bind";

const cx = classNames.bind(PreviewCVStyle);

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PreviewCV() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={cx(["preview-cv-container", "bg-preview-cv-noel bg-contain bg-top bg-no-repeat bg-black"])}>
      <nav className="h-fit p-4 flex items-center justify-between opacity-80 bg-[#070C1F] z-20">
        <Link to={"/"} className={cx(["font-mochiy", "p-2 outline-none hover:border-b hover:border-[cyan]"])}>
          <p className="text-[cyan]">Portfolio</p>
        </Link>
        <Button type="button" onClick={useDownloadCV()} startIcon={<FileDownloadIcon />}>Download CV</Button>
      </nav>
      <div className="w-fit mx-auto p-12 pb-8 bg-[#dedede]">
        <Document file={CV} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => {
              return (
                <Page
                  key={page}
                  className='mb-4'
                  pageNumber={page}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              )
            })
          }
        </Document>
      </div>
    </div>
  );
}