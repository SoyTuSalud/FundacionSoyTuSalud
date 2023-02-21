import { useState } from 'react';
import { DashboardLayoutRoot } from './PrivateLayout.css';
import { Box } from '@mui/material';



import React from 'react'
import { DashboardNavbar } from './components/dashboard-navbar';
import { DashboardSidebar } from './components/dashboard-sidebar';

const PrivateLayout = ({children}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);


  return (
      <>
        <DashboardLayoutRoot>
            <Box
            sx={{
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                width: '100%',
            }}
            >
            {children}
            </Box>
        </DashboardLayoutRoot>
        <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
        <DashboardSidebar
            onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
      </>
   
  )
}

export default PrivateLayout