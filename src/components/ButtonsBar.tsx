import React, { FC } from 'react'
import classNames from 'classnames'
import withStyles, { WithStylesProps } from 'react-jss'

const styles = {
  button: {
    border: 'none',
    borderRadius: 100,
    color: '#FFFFFF',
    padding: 14,
    minWidth: 100,
    transition: 'all 300ms ease-out',
    cursor: 'pointer',
    '&:disabled': {
      opacity: 0.4,
    },
  },
  success: {
    backgroundColor: '#7AC455',
  },
  error: {
    backgroundColor: '#F35742',
  },
  buttonContainer: {
    marginTop: 24,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
}

interface Props extends WithStylesProps<typeof styles> {
  onClickBack?(): void
  isFirst: boolean
  isLast: boolean
  onClickSubmit?(): void
  onClickNext(): void
  isDisabledNext: boolean
  labelBack?: string
  labelNext: string
}

const ButtonsBar: FC<Props> = ({
  classes,
  onClickBack,
  isFirst,
  isLast,
  onClickSubmit,
  onClickNext,
  isDisabledNext,
  labelBack,
  labelNext,
}) => {
  return (
    <div className={classes.buttonContainer}>
      <button
        className={classNames(classes.button, classes.error)}
        onClick={onClickBack}
        disabled={isFirst}
        style={{ visibility: isFirst ? 'hidden' : 'visible' }}
      >
        {labelBack}
      </button>
      <button
        className={classNames(classes.button, classes.success)}
        onClick={isLast ? onClickSubmit : onClickNext}
        disabled={isDisabledNext}
      >
        {labelNext}
      </button>
    </div>
  )
}

export default withStyles(styles)(ButtonsBar)
