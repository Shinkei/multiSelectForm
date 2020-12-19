import React from 'react';
import withStyles from 'react-jss';

const styles = {
  title: {
    color: 'tomato'
  }
};

function App(props:{classes:{title:string}}) {
  const {classes} = props
  return (
    <div className="App">
      <header className={classes.title}>
        <h1>Multi step form</h1>
      </header>
    </div>
  );
}

export default withStyles(styles)(App);
