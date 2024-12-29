export function Welcome(props:any) {
    let dynamic_element = "";
    if (props.name.slice(-1) == 'a') {
        dynamic_element = "K";
    } else {
        dynamic_element = "M";
    }
    return (
        <>
            <h1>Hello, {props.name}</h1>
            <h2>Gender: {dynamic_element}</h2>
        </>
    )
}