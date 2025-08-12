
import type { FC } from 'react'
import ChatGPTIcon from '../assets/logos/ChatGPT.svg?react'
import ClaudeIcon from '../assets/logos/Claude.svg?react'
import GeminiIcon from '../assets/logos/Gemini.svg?react'
import DeepSeekIcon from '../assets/logos/DeepSeek.svg?react'
import PerplexityIcon from '../assets/logos/Perplexity.svg?react'

interface ProviderIconProps {
  name: string;
}

const map: Record<string, FC<React.SVGProps<SVGSVGElement>>> = {
  'ChatGPT': ChatGPTIcon,
  'Claude': ClaudeIcon,
  'Gemini': GeminiIcon,
  'DeepSeek': DeepSeekIcon,
  'Perplexity': PerplexityIcon,
}

const ProviderIcon: FC<ProviderIconProps> = ({ name }) => {
  const Icon = map[name]
  return <Icon className="h-5 w-5 text-gray-700" aria-hidden/>
}

export default ProviderIcon