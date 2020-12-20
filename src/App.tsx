import React, { FC } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import Header from './components/Header'
import MultiStepForm from './components/MultiStepForm'
import tenantForm from './tenantForm.json'

const styles = {}

interface Props extends WithStylesProps<typeof styles> {}

const App: FC<Props> = ({ classes }) => {
  return (
    <div className='App'>
      <Header />
      <MultiStepForm steps={tenantForm.steps} />
    </div>
  )
}

export default withStyles(styles)(App)
