import React, { FC, useState, ChangeEvent } from 'react'
import classNames from 'classnames'
import withStyles, { WithStylesProps } from 'react-jss'
import StepForm from './StepForm'
import ProgressBar from './ProgressBar'
import Step from '../types/Step'

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '5fr repeat(2, 1fr)',
    gridColumnGap: 12,
    gridRowGap: 12,
  },
}

interface Props extends WithStylesProps<typeof styles> {
  steps: Array<Step>
}

const MultiStepForm: FC<Props> = ({ classes, steps }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [form, setForm] = useState({})

  const goNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const goBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const submit = () => {
    console.log('submit')
  }

  const updateField = (field: string, value: string) => {
    console.log(field, value)
    const newForm: { [name: string]: string } = { ...form }
    newForm[field] = value
    setForm(newForm)
  }

  return (
    <section className={classes.root}>
      <StepForm
        step={steps[currentStep - 1]}
        form={form}
        isFirst={currentStep === 1}
        isLast={currentStep === steps.length}
        onUpdateField={updateField}
        onClickNext={goNext}
        onClickBack={goBack}
        onClickSubmit={submit}
      />
      <ProgressBar currentStep={currentStep} numberSteps={steps.length} />
    </section>
  )
}

export default withStyles(styles)(MultiStepForm)
