import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import DataTable from './DataTable'

export default function DataTabs({ data }) {
  return (
    <Tabs>
      <TabList className="tab-list">
        <Tab className="tab">🏢 Event Info</Tab>
        <Tab className="tab">🏛️ Meeting Rooms</Tab>
        <Tab className="tab">🏨 Accommodations</Tab>
        <Tab className="tab">🍽️ Food & Beverage</Tab>
        <Tab className="tab">🎥 Audio Visual</Tab>
        <Tab className="tab">💳 Financial Terms</Tab>
      </TabList>

      <TabPanel>
        <div className="custom-card">
          <h4 style={{ marginBottom: '1.5rem', color: '#2C3E50' }}>Event Information</h4>
          {data.event_info && Object.keys(data.event_info).length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
              {Object.entries(data.event_info).map(([key, value]) => (
                <div key={key} style={{ display: 'contents' }}>
                  <div style={{ fontWeight: '600', color: '#666', textTransform: 'capitalize' }}>
                    {key.replace(/_/g, ' ')}:
                  </div>
                  <div>{value || 'N/A'}</div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#999' }}>No event information found</p>
          )}
        </div>
      </TabPanel>

      <TabPanel>
        <DataTable
          title="Meeting Room Bookings"
          data={data.meeting_rooms || []}
          columns={[
            { key: 'date', label: 'Date' },
            { key: 'time', label: 'Time' },
            { key: 'function', label: 'Function' },
            { key: 'location', label: 'Location' },
            { key: 'capacity', label: 'Capacity' },
            { key: 'room_rental', label: 'Rental', format: 'currency' }
          ]}
        />
      </TabPanel>

      <TabPanel>
        <DataTable
          title="Sleeping Room Blocks"
          data={data.sleeping_rooms || []}
          columns={[
            { key: 'check_in_date', label: 'Check In' },
            { key: 'check_out_date', label: 'Check Out' },
            { key: 'room_type', label: 'Room Type' },
            { key: 'number_of_rooms', label: 'Rooms' },
            { key: 'nightly_rate', label: 'Rate', format: 'currency' },
            { key: 'total_room_cost', label: 'Total', format: 'currency' }
          ]}
        />
      </TabPanel>

      <TabPanel>
        <DataTable
          title="Food & Beverage Services"
          data={data.food_beverage || []}
          columns={[
            { key: 'date', label: 'Date' },
            { key: 'time', label: 'Time' },
            { key: 'product_name', label: 'Service' },
            { key: 'attendees', label: 'Attendees' },
            { key: 'per_person_cost', label: 'Per Person', format: 'currency' },
            { key: 'total_cost', label: 'Total', format: 'currency' }
          ]}
        />
      </TabPanel>

      <TabPanel>
        <DataTable
          title="Audio Visual Equipment"
          data={data.audio_visual || []}
          columns={[
            { key: 'date', label: 'Date' },
            { key: 'equipment_name', label: 'Equipment' },
            { key: 'quantity', label: 'Qty' },
            { key: 'unit_cost', label: 'Unit Cost', format: 'currency' },
            { key: 'total_cost', label: 'Total', format: 'currency' }
          ]}
        />
      </TabPanel>

      <TabPanel>
        <div className="custom-card">
          <h4 style={{ marginBottom: '1.5rem', color: '#2C3E50' }}>Financial Terms & Conditions</h4>
          {data.financial_terms && Object.keys(data.financial_terms).length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
              {Object.entries(data.financial_terms).map(([key, value]) => (
                <div key={key} style={{ display: 'contents' }}>
                  <div style={{ fontWeight: '600', color: '#666', textTransform: 'capitalize' }}>
                    {key.replace(/_/g, ' ')}:
                  </div>
                  <div>
                    {key.includes('rate') ? `${value}%` : 
                     key.includes('minimum') || key.includes('cost') ? `$${value}` : 
                     value || 'N/A'}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#999' }}>No financial terms found</p>
          )}
          
          {data.vat_details && data.vat_details.vat_applicable && (
            <div style={{ marginTop: '2rem' }}>
              <h5 style={{ marginBottom: '1rem', color: '#2C3E50' }}>VAT Details</h5>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                {Object.entries(data.vat_details).map(([key, value]) => (
                  <div key={key} style={{ display: 'contents' }}>
                    <div style={{ fontWeight: '600', color: '#666', textTransform: 'capitalize' }}>
                      {key.replace(/_/g, ' ')}:
                    </div>
                    <div>{value || 'N/A'}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </TabPanel>
    </Tabs>
  )
}