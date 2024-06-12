import classNames from "classnames/bind";
import style from './Body.module.scss';


const cx = classNames.bind(style);
function Content() {
    return (
        <div className={cx("Content")}>
            {/* <img src={images.carousel}/> */}
        </div>
      );
}

export default Content;