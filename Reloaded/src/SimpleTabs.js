import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
	if(value==0)
		window.location.href="/";
	else if(value==1)
		window.location.href="/about";
	else if(value==2)
		window.location.href="/faq";
	else if(value==3)
		window.location.href="/login";
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="FAQ" />
            <Tab label="Login" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Home</TabContainer>}
        {value === 1 && <TabContainer>About</TabContainer>}
        {value === 2 && <TabContainer>FAQ</TabContainer>}
        {value === 3 && <TabContainer>Login</TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);