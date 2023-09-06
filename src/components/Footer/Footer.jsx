import './Footer.scss'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="footerBasic">
                <footer>
                    <div className="social">
                        <a href=""> <Icon icon="ion:logo-instagram" /></a>
                        <a href=""><Icon icon="ion:logo-snapchat" /></a>
                        <a href=""><Icon icon="ion:logo-twitter" /></a>
                        <a href=""><Icon icon="ion:logo-facebook" /></a>
                        <a href=""><Icon icon="ion:logo-linkedin" /></a>
                        <a href=""><Icon icon="ion:logo-github" /></a></div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="">Home</a></li>
                        <li className="list-inline-item"><a href="">About</a></li>
                        <li className="list-inline-item"><a href="">Contact</a></li>
                    </ul>
                    <p className="copyright"> Created by Adrian Pastor and Victor Macedo. Copyright © 2023 . All rights reserved.</p> 
                </footer>
            </div>
        </div>
    )
}

export default Footer