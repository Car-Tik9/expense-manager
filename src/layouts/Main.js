import React , { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import clsx from 'clsx';

import Topbar from './components/Topbar'
import SideBar from  './components/Sidebar/Sidebar'
const useStyles = makeStyles(theme => ({
    root: {
      paddingTop: 56,
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        paddingTop: 64
      }
    },
    shiftContent: {
      paddingLeft: 240
    },
    content: {
      height: '100%'
    }
  }));

const Main = props =>{
    const { children } = props;
    const classes = useStyles();
    const theme  = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'),{
        defaultMatches:true
    })
    const [openSidebar ,setOpenSidebar ] = useState(false);
    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    }
    const handleSidebarClose = () =>{
        setOpenSidebar(false);
    }

    const shouldOpenSidebar = isDesktop ? true : openSidebar;
    return (
        <div className={clsx({
            [classes.root] : true,
            [classes.shiftContent] : isDesktop
        })}>
        <Topbar></Topbar>
        <SideBar onClose ={handleSidebarClose} 
        open={shouldOpenSidebar}
        variant = {isDesktop ? 'persistent' : 'temporary'}></SideBar>
        <main className ={classes.content}>
            {children}
        </main>

        </div>
    );
}

export default Main