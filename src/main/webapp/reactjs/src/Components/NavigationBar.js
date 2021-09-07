
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import log from '../images/log.png';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white'
    },
    title: {
        flexGrow: 1,
        color: 'white'
	},
	btn: {
		color: 'white',
		
    },
    appBarTransparent: {
        backgroundColor: 'transparent'
    },
    appBarSolid: {
        backgroundColor: 'RGB(23, 43, 90)'
	},
	btnSolid: {
        Radius: '50%',
        backgroundColor: 'RGB(23, 43, 90)'
	}
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 20
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
                         <img src={log} width={window.scrollY > 20?'50':'80'}  alt="" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        
          			</Typography>
                    <Button  variant="contained" color={window.scrollY > 20?'':'primary'} href="/api">API / Developers</Button>
                </Toolbar>
            </AppBar>
      
    );
}