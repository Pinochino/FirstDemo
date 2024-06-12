import classNames from "classnames/bind";
import style from "./Menu.module.scss";

import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import images from "~/assets/images";

const cx = classNames.bind(style);

function Menu() {

  const [toggle, setToggle] = useState(false);
  const [rotate, setRotate] = useState(false);
  
    const handleClick = () => {
      setToggle(!toggle);
      setRotate(!rotate);
    }
  
  return (
    <div className={cx("Menu")}>
      <nav className={cx("wrapper")} data-uk-grid>
        <div className={cx("")}>
          <img className={cx("logo")} src={images.logo} alt="error"  />
        </div>
        <div className={cx("menu-body")}>
          <span>
            <Link to={"/deal"}>SUPER DEALS</Link>
          </span>
          <span
          onClick={handleClick}
          >
            <span>MOTHER'S DAY</span>
            <FiChevronDown 
              className={cx('rotateIcon', {rotate: rotate})}
            />
            {toggle && (
              <div className={cx('dropdown')}>
                <span>Heart</span>
                <span>Heart</span>
                <span>Heart</span>
                <span>Heart</span>
              </div>
            )}
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
