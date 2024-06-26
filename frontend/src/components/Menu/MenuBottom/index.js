import classNames from "classnames/bind";
import style from "~/components/Menu/Menu.module.scss";
import { FiAlignJustify, FiChevronDown } from "react-icons/fi";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const cx = classNames.bind(style);
function MenuBottom() {
  return (
    <div className={cx("MenuBottom")} data-uk-grid>
      <div className={cx("Department")}>
        <span>
          {" "}
          <FiAlignJustify />
        </span>
        <span>
          Deparments
          <FiChevronDown />
        </span>
      </div>
      <div className={cx("Search")}>
        <input placeholder="Search for products" />
        <div className={cx('select')}>
          <span>All Categories</span>
          <FiChevronDown />
        </div>
        <button type="submit">
          <CiSearch />
        </button>
      </div>
      <div className={cx("actions")}>
        <CiUser />
        <CiHeart />
        <IoBagOutline />
      </div>
    </div>
  );
}

export default MenuBottom;
