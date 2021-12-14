import Image from 'next/image'

const Button = ({ text, onClick, icon, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      <Image src={icon} height={15} width={15} alt="" /> <span className="pl-1">{text}</span>
    </button>
  )
}

export default Button
