import style from './HeaderOnly.module.scss';
import classNames from "classnames/bind";
import Header from "~/components/layouts/CommonComponents/Header";

const cx = classNames.bind(style);
function HeaderOnly() {
    return (
        <div className={cx('HeaderOnly')}>
            <Header />
        </div>
    )
}
export  default HeaderOnly;