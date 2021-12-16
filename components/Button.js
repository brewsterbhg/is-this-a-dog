import Image from 'next/image'

const Button = ({ text, onClick, icon, size = 15, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      <Image src={icon} height={size} width={size} alt="" /> <span className="pl-1">{text}</span>
    </button>
  )
}

export default Button
