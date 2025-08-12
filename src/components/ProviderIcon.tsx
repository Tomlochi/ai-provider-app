
import type { FC } from 'react'
import ChatGPTIcon from '../assets/logos/ChatGPT.svg?react'
import ClaudeIcon from '../assets/logos/Claude.svg?react'
import GeminiIcon from '../assets/logos/Gemini.svg?react'
import DeepSeekIcon from '../assets/logos/DeepSeek.svg?react'
import PerplexityIcon from '../assets/logos/Perplexity.svg?react'

const map: Record<string, FC<React.SVGProps<SVGSVGElement>>> = {
  'ChatGPT': ChatGPTIcon,
  'Claude': ClaudeIcon,
  'Gemini': GeminiIcon,
  'DeepSeek': DeepSeekIcon,
  'Perplexity': PerplexityIcon,
}

export function ProviderIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name]
  return <Icon className={className} aria-hidden />
}
