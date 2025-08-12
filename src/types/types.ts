
export type Severity = 'Critical' | 'High' | 'Medium' | 'Low'

export interface Classifier {
  id: number
  name: string
  severity: Severity
  description: string
}

export interface ProviderModel {
  id: number
  providerName: string
  isSupported: boolean
  classifiers: Classifier[]
}