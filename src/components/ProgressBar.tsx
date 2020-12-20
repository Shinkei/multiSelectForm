import React, { FC } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'

const styles = {
  root: {
    border: 'solid 1px #7AC455',
    borderRadius: 100,
    height: 18,
    textAlign: 'center',
    '@media (max-width: 450px)': {
      maxWidth: '100%',
    },
  },
}

interface Props extends WithStylesProps<typeof styles> {
  currentStep: number
  numberSteps: number
}

const ProgressBar: FC<Props> = ({ classes, currentStep, numberSteps }) => {
  const percentage: number = (currentStep * 100) / numberSteps
  return (
    <div
      className={classes.root}
      style={{
        background: `linear-gradient(to right, #7AC455 ${percentage}%, white ${percentage}% 100%)`,
      }}
    >{`${currentStep}/${numberSteps}`}</div>
  )
}

export default withStyles(styles)(ProgressBar)
