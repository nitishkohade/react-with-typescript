
type RandomNumberProps = {
    value: number
}

type PositiveNumber = RandomNumberProps & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberProps & {
    isPositive?: never
    isNegative: boolean
    isZero?: never
}

type Zero = RandomNumberProps & {
    isPositive?: never
    isNegative?: never
    isZero: boolean
}

type RandomNumberProps1 = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps1) => {
    return (
        <div>
            {value} {isPositive && 'positive'}
        </div>
    )
}