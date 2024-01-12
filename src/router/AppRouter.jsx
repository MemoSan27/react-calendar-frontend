import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/';
import { CalendarPage } from '../calendar';



export const AppRouter = () => {
    const authStatus = 'authenticated';

  return (
    <Routes>
        {
            (authStatus === 'not-authenticated') 
            ? <Route path='/*' element={<Navigate to="/auth/login" />} />
            : <Route path='/*' element={<CalendarPage />} />
                
        }
        <Route path='/auth/*' element={<LoginPage />} />
        

        
    </Routes>
  )
}
