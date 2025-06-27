import { FiDownload, FiCopy } from 'react-icons/fi'
import { toast } from 'react-hot-toast'

export default function ExportOptions({ onDownloadJSON, parsedData }) {
  const copyToClipboard = () => {
    const text = JSON.stringify(parsedData, null, 2)
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Data copied to clipboard!')
    }).catch(() => {
      toast.error('Failed to copy to clipboard')
    })
  }

  return (
    <div className="custom-card">
      <h3 style={{ marginBottom: '1.5rem', color: '#2C3E50' }}>📦 Export Options</h3>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={onDownloadJSON} className="primary-button">
          <FiDownload style={{ display: 'inline', marginRight: '0.5rem' }} />
          Download JSON
        </button>
        <button onClick={copyToClipboard} className="secondary-button">
          <FiCopy style={{ display: 'inline', marginRight: '0.5rem' }} />
          Copy to Clipboard
        </button>
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
        Export your parsed event data for use in other systems or for further analysis.
      </p>
    </div>
  )
}