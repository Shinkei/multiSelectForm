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

    return isDisabled
  }

  return (
    <div className={classes.root}>
      <div className={classes.fieldsContainer}>
        {fields.map((field) => (
          <FormInput
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
