import React from 'react';
import ReactDOM from 'react-dom';
import {AppointmentsDayView} from './Appointment';
import {CustomerForm} from './CustomerForm';
import {sampleAppointments} from './sampleData';
{/* <AppointmentsDayView appointments={sampleAppointments}/> */}
ReactDOM.render(
    <CustomerForm />,
    document.getElementById('root')
);