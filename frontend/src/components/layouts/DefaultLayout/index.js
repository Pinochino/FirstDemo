import style from './DefaultLayout.module.scss';
import Header from "~/components/layouts/CommonComponents/Header";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
function DefaultLayout({children}) {
    return (
        <div className={cx('DefaultLayout')}>
            <Header />
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
}
export  default DefaultLayout;