import React from 'react'

const ScrollTop = ({scrollTo}) => {

    const [scroll, setScroll] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    return (
        <>{scroll > scrollTo ? <div className="up" onClick={()=>{window.scrollTo({top: scrollTo, behavior: "smooth"})}}>up</div> : <div className="up op" onClick={()=>{window.scrollTo({top: scrollTo, behavior: "smooth"})}}>up</div>}</>
    )
}

export default ScrollTop
