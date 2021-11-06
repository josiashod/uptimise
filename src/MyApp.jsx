import React, { useState } from "react";
import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='w-[800px]'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        selectable
        locale={frLocale}
        initialView='dayGridMonth'
        head
        dayHeaderClassNames='py-2 capitalize'
        customButtons={{
          Liste: {
            text: "Liste",
            click: () => console.log("Liste"),
          },
        }}
        headerToolbar={{
          start: "prev today next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,Liste",
        }}
        nowIndicatorClassNames='bg-green-500'
        viewClassNames='bg-custom-l'
        // dayCellClassNames='bg-pink-500 '
        moreLinkClassNames='bg-yellow-500'
        slotLaneClassNames='hidden'
        slotLabelClassNames='hidden'
        allDaySlot={false}
        weekText='text'
      />
    </div>
  );
}
export default MyApp;
