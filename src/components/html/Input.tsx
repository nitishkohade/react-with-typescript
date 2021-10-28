import React from "react"

type InputProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'input'>

export const CustomInput = ({variant, ...rest}: InputProps) => {
    return <input className={`class-with-${variant}`} {...rest}>
    </input>
}