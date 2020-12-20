import React, { FC, useState } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import StepForm from './StepForm'
import ProgressBar from './ProgressBar'
import Step from '../types/Step'
import FormConfirmation from './FormConfirmation'

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '5fr 30px',
    gridColumnGap: 12,
    gridRowGap: 12,
    maxWidth: 500,
    margin: 'auto',
    '@media (max-width: 450px)': {
      maxWidth: '100%',
    },
  },
}

interface Props extends WithStylesProps<typeof styles> {
  steps: Array<Step>
}

const MultiStepForm: FC<Props> = ({ classes, steps }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [form, setForm] = useState({})
  const [showResult, setShowResult] = useState(false)

  const goNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const goBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const submit = () => {
    setShowResult(true)
  }

  const reset = () => {
    setCurrentStep(1)
    setForm({})
    setShowResult(false)
  }

  const updateField = (field: string, value: string) => {
    const newForm: { [name: string]: string } = { ...form }
    newForm[field] = value
    setForm(newForm)
  }

  return (
    <section className={classes.root}>
      {showResult ? (
        <FormConfirmation form={form} reset={reset} />
      ) : (
        <>
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
        </>
      )}
    </section>
  )
}

export default withStyles(styles)(MultiStepForm)
