type Field = {
  field: string
  label: string
  type: string
  required: boolean
  options?: {
    label: string
    value: string | number
  }[]
}

export default Field