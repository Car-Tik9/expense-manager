import React from 'react'
import { List, ListItem, Button } from '@material-ui/core';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';


const styles = theme =>({
     root:{},
     icon: {
        color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
      },
      button:{
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium
      }

})
class SidebarNav extends React.Component{
    

    render(){
        const { pages , className , classes, ...rest } = this.props;
        return (
            <List {...rest} className = {clsx(classes.root,className)}>
                {pages.map(page => (
                    <ListItem 
                    className ={classes.item} 
                    key={page.title}
                    disableGutters >
                        <Button className ={ classes.button}
                        >
                            <div className = {classes.icon}>{page.icon}</div>
                            {page.title}
                        </Button>
                    </ListItem>
                ))}
            </List>
        );
    }
}

export default withStyles(styles)(SidebarNav)