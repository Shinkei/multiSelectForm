import React, { FC } from 'react'
import classNames from 'classnames'
import withStyles, { WithStylesProps } from 'react-jss'
import Step from '../types/Step'

const styles = {
  button: {
    border: 'none',
    borderRadius: 100,
    color: '#FFFFFF',
    padding: 14,
    minWidth: 100,
    cursor: 'pointer',
  },
  success: {
    backgroundColor: '#7AC455',
  },
  error: {
    backgroundColor: '#F35742',
  },
}

interface Props extends WithStylesProps<typeof styles> {
  step: Step
  form: { [name: string]: string | number }
  isFirst: boolean
  isLast: boolean
  onClickNext(): void
  onClickBack(): void
  onClickSubmit(): void
  onUpdateField(field: string, value: string): void
}

const StepForm: FC<Props> = ({
  classes,
  step,
  form,
  onClickNext,
  onClickBack,
  isFirst,
  isLast,
  onClickSubmit,
  onUpdateField,
}) => {
  const fields = step.fields
  return (
    <div>
      {fields.map((field) => (
        <div>
          <label htmlFor={field.field}>{field.label}</label>
          <input
            id={field.field}
            type={field.type}
            value={form[field.field] || ''}
            onChange={(e) => onUpdateField(field.field, e.target.value)}
          />
        </div>
      ))}
      <div>
        <button
          className={classNames(classes.button, classes.error)}
          onClick={onClickBack}
          disabled={isFirst}
          style={{ visibility: isFirst ? 'hidden' : 'visible' }}
        >
          Back
        </button>
        <button
          className={classNames(classes.button, classes.success)}
          onClick={isLast ? onClickSubmit : onClickNext}
        >
          {isLast ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default withStyles(styles)(StepForm)
