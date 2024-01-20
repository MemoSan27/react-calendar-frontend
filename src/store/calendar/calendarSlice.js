import { createSlice, current } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Guillermo',
  }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent,
        ],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (currentValue, { payload }) => {
          currentValue.activeEvent = payload;
        },
        onAddNewEvent: (currentValue, {payload}) => {
          currentValue.events.push( payload );
          currentValue.activeEvent = null;
        },
        onUpdateEvent: (currentValue, {payload}) => {
          currentValue.events = currentValue.events.map( event => {
            if( event._id === payload._id){
              return payload;
            }
            return event;
          });
        },
        onDeleteEvent: (currentValue) => {
          if( currentValue.activeEvent){
            currentValue.events = currentValue.events.filter(event => event._id !== currentValue.activeEvent._id);
            currentValue.activeEvent = null;
          }
        }
        
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;
