import Menu from "~/components/Menu";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import MenuBottom from "~/components/Menu/MenuBottom";

const cx = classNames.bind(style);
function Header() {
  return (
    <div className={cx("Header")}>
      {/* <div className={cx('panel-header')}> */}
      <div className={cx("panel-header-top")}>
        <span>TechMarket eCommerce – Always free delivery</span>
        <span>Quality Guarantee of products</span>
        <span>Fast returnings program</span>
        <span>No additional fees</span>
      </div>
      <div className={cx("panel-header-body")}>
        <Menu />
      </div>
      <div className={cx("panel-header-bottom")}>
        <MenuBottom />
      </div>
    </div>
    // </div>
  );
}
export default Header;
