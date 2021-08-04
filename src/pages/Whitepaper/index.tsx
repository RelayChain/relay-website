import './styles.scss';

// import { Document, Page, pdfjs } from 'react-pdf'
import React, { useEffect, useRef, useState } from 'react'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePdf } from 'react-pdf-js';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Whitepaper() {

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const canvasEl = useRef(null);
  const url = "https://docs.relaychain.com/pdf/bridging-as-a-service-defi-whitepaper.pdf";

  const [loading, numPages] = usePdf({
    file: url,
    page,
    canvasEl
  });

  useEffect(() => {
    setPages(numPages);
  }, [numPages]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex' }}>
      <canvas className="pdf-canvas" ref={canvasEl} />
      <div className="pagination">
        <div className="go-back" onClick={() => page > 1 ? setPage(page - 1) : null}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="go-forward" onClick={() => page < pages ? setPage(page + 1) : null}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  )
}
