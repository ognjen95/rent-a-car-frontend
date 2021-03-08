import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import FaceIcon from '@material-ui/icons/Face';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { DriveEta } from '@material-ui/icons';
import './defaultLayout.style.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },

  navLiText: {
    paddingRight: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  nameText: {
    paddingRight: '2px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl] = React.useState(null);
  const name = sessionStorage.getItem('name');
  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
    ></Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <Typography className={classes.title} variant="h5" noWrap>
              R.A.C.
            </Typography>
          </IconButton>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/dashboard">
              <IconButton color="inherit">
                <span className={classes.navLiText}>Cars </span>
                <DriveEta />
              </IconButton>
            </Link>

            <Link to="/customers">
              <IconButton color="inherit">
                <span className={classes.navLiText}>Customers </span>
                <FaceIcon />
              </IconButton>
            </Link>

            <Link to="/">
              <span className={classes.nameText}>{name} </span>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <PowerSettingsNewIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </div>
  );
}
