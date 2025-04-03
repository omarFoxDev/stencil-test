export interface ValidationData {
  value: string[]
  import_export_field?: string
}

export interface UIComponentValidation {
  errors: string[],
  name: string,
  data?: ValidationData[]
}

export interface validationType {
  type: string,
  param?: number | boolean,
  message?: string,
  secondMessage?: string
}

export interface UIProps {
  name: string
  import_export_field?: string
  mapper?: string;
  label?: string
  placeholder?: string
  error?: string
  value?: unknown
  disabled?: boolean
  required?: boolean
  save_only?: boolean
  tab_ndex?: number
  validations?: validationType[]
  errorMessage?: string;
}
