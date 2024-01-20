import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/";


export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(store => store.calendar);

  const setActiveEvent = ( calendarEvent ) => {
    dispatch(onSetActiveEvent(calendarEvent));
  }

  const startSavingEvent = async(calendarEvent) => {
    //TODO: Llegar al backend

    //TODO: Todo bien
    if( calendarEvent._id ){
      //Actualizando
      dispatch( onUpdateEvent({...calendarEvent}));
    } else{
      //Creando
      dispatch( onAddNewEvent({...calendarEvent, _id: new Date().getTime()}) );
    }
  }

  const startDeletingEvent = () => {
    //TODO: Llegar al backend

    
    dispatch( onDeleteEvent() );
  }

  return {
    //Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //Methods
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
  }
   
}
