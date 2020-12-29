import React, { FC } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import Step from '../types/Step'
import ButtonsBar from './ButtonsBar'
import FormInput from './FormInput'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 450px)': {
      maxWidth: '100%',
    },
  },
  fieldsContainer: {
    minHeight: 280,
  },
}

interface Props extends WithStylesProps<typeof styles> {
  step: Step
  form: { [name: string]: string }
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
      const value: string = form[field.field]
      if (!value) {
        isDisabled = true
      }
      if (field.type === 'email') {
        const pattern: RegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
        isDisabled = !pattern.test(value)
      }
    })

    return isDisabled
  }

  return (
    <div className={classes.root}>
      <div className={classes.fieldsContainer}>
        {fields.map((field) => (
          <FormInput
            key={field.field}
            type={field.type}
            label={field.label}
            name={field.field}
            value={form[field.field] || ''}
            isRequired={field.required}
            onChange={onUpdateField}
            options={field.options}
          />
        ))}
      </div>
      <ButtonsBar
        onClickBack={onClickBack}
        isFirst={isFirst}
        isLast={isLast}
        onClickSubmit={onClickSubmit}
        onClickNext={onClickNext}
        isDisabledNext={isDisabled()}
        labelBack='Back'
        labelNext={isLast ? 'Confirm' : 'Next'}
      />
    </div>
  )
}

export default withStyles(styles)(StepForm)
