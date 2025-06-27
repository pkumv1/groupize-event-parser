export default function DataTable({ title, data, columns }) {
  const formatValue = (value, format) => {
    if (format === 'currency' && typeof value === 'number') {
      return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }
    return value || '-'
  }

  return (
    <div className="custom-card">
      <h4 style={{ marginBottom: '1.5rem', color: '#2C3E50' }}>{title}</h4>
      {data && data.length > 0 ? (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    style={{
                      textAlign: 'left',
                      padding: '0.75rem',
                      fontWeight: '600',
                      color: '#666',
                      fontSize: '0.875rem'
                    }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: '1px solid #f0f0f0',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f9f9f9'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      style={{
                        padding: '0.75rem',
                        fontSize: '0.875rem'
                      }}
                    >
                      {formatValue(row[col.key], col.format)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{ color: '#999', textAlign: 'center', padding: '2rem' }}>
          No {title.toLowerCase()} data found
        </p>
      )}
    </div>
  )
}