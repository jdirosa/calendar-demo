import React from 'react';
import { Calendar } from './components/calendar';
import { EventContextProvider } from './context-providers/event-context';
import { EventViewer } from './components/home/event-viewer';

const App: React.FunctionComponent = () => {
  return (
    <div style={{ margin: 20 }}>
      <EventContextProvider>
        <Calendar />
        <EventViewer />
      </EventContextProvider>
    </div>
  );
};

export default App;
