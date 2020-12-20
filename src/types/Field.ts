type Field = {
  field: string
  label: string
  type: string
  options?: {
    label: string
    value: string | number
  }[]
}

export default Field