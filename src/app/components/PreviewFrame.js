"use client";

import { useEffect, useRef } from "react";

export default function PreviewFrame({ code }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentDocument) return;

    const document = iframe.contentDocument;
    const fullHtml = `
      <html>
        <head>
          <style>${code?.css || ""}</style>
        </head>
        <body>
          ${code?.html || ""}
          <script>${code?.js || ""}<\/script>
        </body>
      </html>
    `;

    document.open();
    document.write(fullHtml);
    document.close();
  }, [code]);

  return (
    <iframe
      ref={iframeRef}
      className="preview-frame"
      title="Preview"
      sandbox="allow-scripts"
    />
  );
}
