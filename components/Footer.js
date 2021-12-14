import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/SocialIcon'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-12">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} />
        </div>
        <div className="flex mb-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
