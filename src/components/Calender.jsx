import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { appointments } from '../mockData';
import PropTypes from 'prop-types';

export default function Calendar({ currentUser = { role: 'patient' } }) {
  // Safe access to role with fallback
  const userRole = currentUser?.role || 'patient';
  
  const events = appointments.map(appt => ({
    title: `${appt.patientName} - ${appt.reason}`,
    start: `${appt.date}T${appt.time}`,
    backgroundColor: getEventColor(appt.status),
    borderColor: getEventColor(appt.status),
    textColor: '#ffffff',
    extendedProps: {
      doctorId: appt.doctorId,
      status: appt.status
    }
  }));

  function getEventColor(status) {
    switch(status) {
      case 'confirmed': return '#3B82F6';
      case 'pending': return '#F59E0B';
      case 'cancelled': return '#EF4444';
      case 'completed': return '#10B981';
      default: return '#6366F1';
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800">
          {userRole === 'doctor' ? 'My Appointments' : 'Appointment Calendar'}
        </h2>
      </div>
      
      <div className="p-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          height={650}
          events={events}
          editable={userRole !== 'patient'}
          selectable={userRole === 'admin' || userRole === 'receptionist'}
          eventClassNames="cursor-pointer hover:opacity-90"
          dayHeaderClassNames="bg-gray-100 font-medium text-gray-700"
          dayCellClassNames="hover:bg-gray-50 transition-colors"
          nowIndicatorClassNames="now-indicator"
          eventContent={renderEventContent}
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5], // Mon-Fri
            startTime: '08:00',
            endTime: '17:00'
          }}
          slotMinTime="08:00"
          slotMaxTime="18:00"
          weekends={false}
        />
      </div>
    </div>
  );
}

Calendar.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string
  })
};

Calendar.defaultProps = {
  currentUser: {
    role: 'patient',
    id: 0,
    name: 'Guest User'
  }
};

function renderEventContent(eventInfo) {
  return (
    <div className="p-1">
      <div className="font-medium truncate">{eventInfo.event.title}</div>
      <div className="text-xs opacity-80">
        {eventInfo.timeText}
      </div>
    </div>
  );
}