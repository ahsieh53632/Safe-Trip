import React from 'react';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/styles/makeStyles/makeStyles.js";
import WarningIcon from '@material-ui/icons/Warning';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';

const styles = {
  popover: {
    pointerEvents: 'none',
  },
};

const Warning = (props) => {
  const { classes, ...rest} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      {/* <Button
        variant="contained"
        color="warning"
        className={classes.button}
        startIcon = {<WarningIcon />}>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Alert！
      </Typography>
      </Button> */}

      <IconButton 
      color = "inherit"
      aria-label="delete"
      aria-owns={open ? 'mouse-over-popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      ButtonAlign = "center"
      >
        <WarningIcon fontSize="large"/>
      </IconButton>

      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>
            You might have encounter with infected people, go check your AtRisk
        </Typography>
      </Popover>

    </div>
  );
}

export default withStyles(styles)(Warning);