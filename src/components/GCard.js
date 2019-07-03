import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { red, grey, blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    height: 360
  },
  link:{
    height: 24
  },
  header:{
    backgroundColor: grey[200]
  },
  content:{
      padding: '10px 0px !important',
      textAlign: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[700],
  },
}));

export default function GCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {props.avatar}
          </Avatar>
        }
        action={
          <div>
          <IconButton aria-label="Settings">
            <Link component={RouterLink} color="inherit" className={classes.link} to="/">
            <EditIcon />
            </Link>
            
          </IconButton>
          <IconButton aria-label="Settings">
            <Link component={RouterLink} color="inherit" className={classes.link} to="/Sensors">
            <VisibilityIcon />
            </Link>
            
          </IconButton>
          </div>
        }
        title={props.title}
        subheader={props.subheader}
      />
      <CardContent className={classes.content}>
          {props.children}
      </CardContent>
    </Card>
  );
}