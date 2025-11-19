import Styles from "./Home.module.css";
import logo from "../../assets/zscylogo.jpg";
export function Home() {
  return (
    <div className={Styles.header}>
      <div className={Styles.header__logo_Box}>
        <img className={Styles.header__logo} src={logo} />
      </div>

      <div className={Styles.headPrimary}>
        <h1 className={Styles.headPrimary__text_Box}>
          <span className={Styles.headPrimary__header_Main}>OutDoors</span>
          <span className={Styles.headPrimary__buttom_Head}>
            Hello everyone
          </span>
        </h1>
        <button
          className={`${Styles.btn} ${Styles.btn__White} ${Styles.btn__Animated}`}
        >
          Click to Discover
        </button>
      </div>
    </div>
  );
}
