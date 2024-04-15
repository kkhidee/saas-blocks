/* eslint-disable react/button-has-type */
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  type?: HTMLButtonElement['type']
  variant?: 'primary' | 'secondary' | 'ghost' | 'outlined' | 'critical'
  size?: 'xs' | 'sm' | 'base' | 'lg'
}

const Button = ({ children, type, size, variant }: ButtonProps) => {
  const variantStyles = {}

  const sizeStyles = {}

  const sizeStyles = {}

  return (
    <button
      type={type}
      className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 font-semibold text-white shadow-sm"
    >
      {children}
    </button>
  )
}

export default Button
