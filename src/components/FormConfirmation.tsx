import React, { FC } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import ButtonsBar from './ButtonsBar'
import FormInput from './FormInput'

const styles = {
  title: {
    textTransform: 'capitalize',
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
}

interface Props extends WithStylesProps<typeof styles> {
  form: { [name: string]: string | number }
  reset(): void
}

const FormConfirmation: FC<Props> = ({ classes, form, reset }) => {
  return (
    <section>
      {Object.entries(form).map(([label, value]) => (
        <FormInput
          type='text'
          label={label.replace(/^\w/, (l) => l.toUpperCase())}
          name={label}
          value={value}
          onChange={(field, value) => {}}
          disabled
        />
      ))}
      <ButtonsBar
        isFirst={true}
        isLast={false}
        onClickNext={reset}
        isDisabledNext={false}
        labelNext='Reset'
      />
    </section>
  )
}

export default withStyles(styles)(FormConfirmation)
