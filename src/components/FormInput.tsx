import React, { FC, ReactElement, FormEvent } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'

const styles = {
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
    '@media (max-width: 450px)': {
      width: '100%',
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
  type: string
  label: string
  name: string
  value: string | number
  isRequired?: boolean
  onChange(field: string, value: string): void
  options?: { label: string; value: string | number }[] | undefined
  disabled?: boolean
  key?: string
}

const FormInput: FC<Props> = ({
  classes,
  key,
  type,
  label,
  name,
  value,
  isRequired,
  onChange,
  options,
  disabled,
}) => {
  const validate = (e: FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement
    const value = target.value
    let isValid = true
    if (type === 'tel') {
      const pattern: RegExp = /^\+?\d{0,10}$/
      isValid = pattern.test(value)
    }
    if (isValid) {
      onChange(name, value)
    }
  }

  let reactField: ReactElement = <></>
  switch (type) {
    case 'text':
    case 'email':
    case 'tel':
      reactField = (
        <div key={key}>
          <h4>{label}</h4>
          <input
            id={name}
            className={classes.input}
            type={type}
            value={value}
            required={isRequired}
            disabled={disabled}
            onChange={validate}
          />
        </div>
      )
      break
    case 'radio':
      reactField = (
        <div key={key}>
          <h4>{label}</h4>
          {options?.map((option, index) => (
            <div className={classes.optionContainer} key={index}>
              <input
                id={option.label}
                type='radio'
                name={name}
                value={option.value}
                disabled={disabled}
                onChange={validate}
              />
              <label htmlFor={option.label}>{option.label}</label>
            </div>
          ))}
        </div>
      )
      break
    default:
      break
  }
  return reactField
}

export default withStyles(styles)(FormInput)
