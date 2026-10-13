'use client';

import { useRef, useState } from 'react';

/** Click-to-pick file drop area. Prototype only: shows the chosen filename, uploads nothing. */
export function UploadWell({ accept = 'application/pdf,image/*' }: { accept?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div
      className={`upload-well${fileName ? ' has-file' : ''}`}
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
      />
      <strong>Click to upload</strong>
      PDF or image, up to 10MB
      <div style={{ marginTop: 6, fontSize: 12, color: 'var(--teal-dark)' }}>{fileName ? `Selected: ${fileName}` : ''}</div>
    </div>
  );
}
