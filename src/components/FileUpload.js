import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi'

export default function FileUpload({ onFileUpload }) {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0])
    }
  }, [onFileUpload])

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  })

  return (
    <div
      {...getRootProps()}
      className={`file-upload-zone ${isDragActive ? 'active' : ''}`}
    >
      <input {...getInputProps()} />
      <FiUploadCloud size={48} color="#7BC143" />
      <p style={{ marginTop: '1rem', fontWeight: '600', color: '#2C3E50' }}>
        {isDragActive
          ? 'Drop your document here...'
          : 'Drag & drop your event document here'}
      </p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
        or click to select a file
      </p>
      <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#999' }}>
        Supported formats: PDF, DOCX
      </p>
      {acceptedFiles.length > 0 && (
        <p style={{ marginTop: '1rem', color: '#7BC143', fontWeight: '600' }}>
          Selected: {acceptedFiles[0].name}
        </p>
      )}
    </div>
  )
}