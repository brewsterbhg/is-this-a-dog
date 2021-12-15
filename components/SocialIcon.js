import Image from 'next/image'

import Mail from '@/assets/social-icons/mail.svg'
import Github from '@/assets/social-icons/github.svg'
import Linkedin from '@/assets/social-icons/linkedin.svg'
import Twitter from '@/assets/social-icons/twitter.svg'

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

const SocialIcon = ({ kind, href, size = 30 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <Image
        src={SocialSvg}
        width={size}
        height={size}
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-${size} w-${size}`}
        alt=""
      />
    </a>
  )
}

export default SocialIcon
