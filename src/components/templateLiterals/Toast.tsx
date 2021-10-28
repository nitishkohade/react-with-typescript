

type HorizontalPosition = 'left' | 'center' | 'right'

type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    // position: `${HorizontalPosition}-${VerticalPosition}`
    position: 
        | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
        | 'center'
}

export const Toast = ({position}: ToastProps) => {
    return <div>Toast notification</div>
}