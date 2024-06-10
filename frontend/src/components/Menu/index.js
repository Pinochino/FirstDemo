import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import images from "~/assets/Images";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const cx = classNames.bind(style);
function Menu() {
  return (
    <div className={cx("Menu")}>
      <nav className={cx("wrapper")} data-uk-grid>
        <div className={cx("uk-width-1-3@s")}>
          <img className={cx("logo")} src={images.logo} alt="error" />
        </div>
        <div className={cx("menu-body", "uk-width-2-3@s")}>
          <span>
            <Link to={"/deal"}>SUPER DEALS</Link>
          </span>
          <span>
            <span>MOTHER'S DAY</span>
            <FiChevronDown />
          </span>{" "}
          <span>
            <span>PAGES</span>
            <FiChevronDown />
          </span>{" "}
          <span>
            <Link to={"/lsale"}>LOGITECH SALES</Link>
          </span>{" "}
          <span>
            <Link to={"/hsale"}>HEADPHONE SALES</Link>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
