import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'
import withStyles, { WithStylesProps } from 'react-jss'
import Step from '../types/Step'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    border: 'none',
    borderRadius: 100,
    color: '#FFFFFF',
    padding: 14,
    minWidth: 100,
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
  },
  input: {
    height: 52,
    width: 400,
    maxWidth: 400,
    borderRadius: 8,
    border: '0px solid transparent',
    background: 'rgb(250, 250, 250) none repeat scroll 0% 0%',
    fontSize: 16,
    fontWeight: 400,
    padding: '0px 8px',
    '&:focus': {
      outline: 'currentcolor none medium',
      background: 'rgb(255, 255, 255) none repeat scroll 0% 0%',
      border: '0px solid transparent',
      boxShadow:
        'rgba(0, 0, 0, 0.04) 0px 1px 10px, rgba(0, 0, 0, 0.12) 0px 1px 2px',
    },
  },
  optionContainer: {
    display: 'flex',
    width: 200,
    '& > input': {
      marginRight: 12,
    },
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

  const isDisabled = (): boolean => {
    let isDisabled: boolean = false
    fields.forEach((field) => {
      console.log('form', form[field.field])
      if (form[field.field] === undefined) {
        isDisabled = true
      }
    })
    console.log('return', isDisabled)
    return isDisabled
  }

  return (
    <div className={classes.root}>
      {fields.map((field) => {
        let reactField: ReactElement = <></>
        switch (field.type) {
          case 'text':
          case 'email':
          case 'tel':
            reactField = (
              <>
                <h4>{field.label}</h4>
                <input
                  id={field.field}
                  className={classes.input}
                  type={field.type}
                  value={form[field.field] || ''}
                  required={field.required}
                  onChange={(e) => onUpdateField(field.field, e.target.value)}
                />
              </>
            )
            break
          case 'radio':
            reactField = (
              <>
                <h4>{field.label}</h4>
                {field.options?.map((option) => (
                  <div className={classes.optionContainer}>
                    <input
                      id={option.label}
                      type='radio'
                      name={field.field}
                      value={option.value}
                      onChange={(e) =>
                        onUpdateField(field.field, e.target.value)
                      }
                    />
                    <label htmlFor={option.label}>{option.label}</label>
                  </div>
                ))}
              </>
            )
            break
          default:
            break
        }
        return reactField
      })}
      <div className={classes.buttonContainer}>
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
          disabled={isDisabled()}
        >
          {isLast ? 'Confirm' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default withStyles(styles)(StepForm)
