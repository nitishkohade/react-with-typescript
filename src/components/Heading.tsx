import { HeadingProps } from "./heading.types"


export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2>
}