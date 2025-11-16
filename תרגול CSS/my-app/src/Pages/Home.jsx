import Styles from "./Home.module.css";
import logo from "../assets/zscylogo.jpg";

export function Home() {
    return (
        <div className={Styles.head}>
            
            <div className={Styles.logoBox}>
                <img className={Styles.logo} src={logo} />
            </div>
            
            <div className={Styles.textBox}>
                <h1 className={Styles.headPrimary}>
                    <span className={Styles.headerMain}>OutDoors</span>
                    <span className={Styles.buttomHead}>Hello everyone</span>
                </h1>
                <button className={`${Styles.btn} ${Styles.btnWhite} ${Styles.btnAnimated}`}>Click to Discover</button>

            </div>

             
        </div>
        
    );
}