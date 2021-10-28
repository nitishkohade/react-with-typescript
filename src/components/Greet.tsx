
type GreetProps = {
    name: string
    messageCount?: number
    isGreeted?: boolean
    status?: 'loading' | 'success'
}

function Greet(props: GreetProps) {

    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )

}

export default Greet