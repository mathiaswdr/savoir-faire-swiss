
export default function Cross({color, style}: {color?: string, style?: string}) {

    return (
        <svg className={` ${style}`} width="102" height="93" viewBox="0 0 102 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="51.5" y1="4.5" x2="51.5" y2="88.5" stroke={color || "#EC6B60"} strokeWidth="9" strokeLinecap="round"/>
            <line x1="97.5" y1="46.5" x2="4.5" y2="46.5" stroke={color || "#EC6B60"} strokeWidth="9" strokeLinecap="round"/>
        </svg>
    )
}