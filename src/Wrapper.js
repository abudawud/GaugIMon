import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link as RouterLink } from 'react-router-dom';
import MQTT from 'mqtt';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "#1976d2",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  link: {
    height: 24,
    marginRight: 10
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
});

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: true, sensors: {0:0.0, 1: 0.0, 2:0.0, 3:0.0, 4:0.0, 5:0.0} }
    this.handleDrawer = this.handleDrawer.bind(this)
  }

  handleDrawer() {
    this.setState({ open: !this.state.open })
  }

  handleDataMQTT = (topic, msg) => {
    const str = msg.toString();
    const sensors = JSON.parse( str );
    if(sensors['ai1'] != undefined){
      const sID = sensors.s;
      const val = sensors.ai1;
      var data = this.state.sensors;
      data[sID] = (val / 4095.0) * 10.0;
      console.log(data);
      this.setState({sensors: data });
    }
    // this.setState({sensors: sensors})
  }

  componentDidMount() {
    console.log("mount");
    var mqtt = MQTT.connect('ws://dev.sabinsolusi.com:10283') 

    mqtt.on('connect', function () {
      console.log("CONNEC")
      mqtt.subscribe('Advantech/#')
    })

    mqtt.on('message', this.handleDataMQTT)

    this.setState({ open: false });
  }

  render() {
    const open = this.state.open
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(this.props.classes.appBar, open && this.props.classes.appBarShift)}>
          <Toolbar className={this.props.classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawer}
              className={clsx(this.props.classes.menuButton, open && this.props.classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={this.props.classes.title}>
              <Link className={this.props.classes.link} color="inherit" component={RouterLink} to="/">
                <IconButton color="inherit">
                  <HomeIcon />
                </IconButton>
              </Link>
              {this.props.title}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(this.props.classes.drawerPaper, !open && this.props.classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={this.props.classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />

          <Divider />

        </Drawer>
        <main className={this.props.classes.content}>
          <div className={this.props.classes.appBarSpacer} />
          <Container maxWidth="lg" className={this.props.classes.container}>
            {React.cloneElement(this.props.children, { sensors: this.state.sensors })}
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(theme => styles(theme)) (Wrapper)