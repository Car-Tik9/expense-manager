import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import clsx from 'clsx';

import Topbar from './components/Topbar'
import SideBar from './components/Sidebar/Sidebar'
import BottomFab from './components/BottomFab/BottomFab'
import CustomSnackBar from './components/CustomSnackBar.js/CustomSnackbar';

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
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  content: {
    height: '100%'
  }
}));

const Main = props => {
  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  })
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  }
  const handleSidebarClose = () => {
    setOpenSidebar(false);
  }

  const shouldOpenSidebar = isDesktop ? true : openSidebar;
  return (
    <div className={clsx({
      [classes.root]: true,
      [classes.shiftContent]: isDesktop
    })}>
      <Topbar onSidebarOpen={handleSidebarOpen}></Topbar>
      <SideBar onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}></SideBar>
      <main className={classes.content}>
        {children}
        <BottomFab></BottomFab>
      </main>
      <CustomSnackBar></CustomSnackBar>
    </div>
  );
}

export default Main