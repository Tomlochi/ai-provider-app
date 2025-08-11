
export type Severity = 'critical' | 'high' | 'medium' | 'low'

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
