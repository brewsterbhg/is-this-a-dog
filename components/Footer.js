import SocialIcon from '@/components/SocialIcon'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-12">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:keith.brewster22@gmail.com`} />
          <SocialIcon kind="github" href={`https://github.com/brewsterbhg`} />
          <SocialIcon kind="twitter" href={`https://twitter.com/switchcasebreak`} />
          <SocialIcon kind="linkedin" href={`https://www.linkedin.com/in/brewcodes`} />
        </div>
        <div className="flex mb-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Keith Brewster</div>
          <div>{` • `}</div>
          <div>{`${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
