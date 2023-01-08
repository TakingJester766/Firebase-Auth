// A header component that displays the title of the app, and sign in and sign out buttons that route to Signin.jsx.
// The header component is rendered in App.jsx.



import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
        <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>
        </div>
    );
    }