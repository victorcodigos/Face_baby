import link from './logo.png'
import "./Logo.scss"


const Logo = () => {
    return (
        <>
            <div className="div-main">
                <div className="logo">
                    <img className="img" src={link} />

                </div>
            </div>
        </>

    )
}
export default Logo