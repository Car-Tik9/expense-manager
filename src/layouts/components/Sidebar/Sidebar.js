import React from 'react'
import { Drawer, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import  DashboardIcon from '@material-ui/icons/Dashboard'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import SettingsIcon from '@material-ui/icons/Settings';
import CreditCardIcom from '@material-ui/icons/CreditCard'

import Profile from './Profile'
import SidebarNav from './SidebarNav';
import DeveloperInfo from './DeveloperInfo';

const styles = theme => ({

    drawer :{
        width:240,
        [theme.breakpoints.up('lg')]:{
            marginTop :64,
            height:'calc(100% - 64px)'
        }
    },
    root:{
        backgroundColor:theme.palette.white,
        display:'flex',
        flexDirection: 'column',
        height:'100%',
        padding:theme.spacing(2)
    },
    divider:{
        margin : theme.spacing(2,0)
    },
    nav :{
        marginBottom:theme.spacing(2)
    },
})

const pages = [
    {
        title:'Dashboard',
        href:'/dashboard',
        icon:<DashboardIcon/>
    },
    {
        title:'Expenses',
        href:'/expenses',
        icon:<CreditCardIcom/>
    },
    {
        title: 'Account',
        href: '/account',
        icon: <AccountBoxIcon />
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: <SettingsIcon />
    }
];
class Sidebar extends React.Component{
    render(){
        const {open , variant , onClose ,className,classes,...rest} = this.props;
        return(
            <Drawer anchor="left" open ={open} variant ={variant} 
            classes ={{ paper : classes.drawer}} onClose ={onClose}>
                <div className = {classes.root}>
                    <Profile></Profile>
                    <Divider className ={classes.divider}></Divider>
                    <SidebarNav className ={classes.nav} pages={pages}></SidebarNav>
                    <DeveloperInfo></DeveloperInfo>
                </div>
            </Drawer>
        );
        
    }
}

export default withStyles(styles)(Sidebar)