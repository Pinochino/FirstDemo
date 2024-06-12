import style from './DefaultLayout.module.scss';
import Header from "~/components/layouts/components/Header";
import classNames from "classnames/bind";
import Content from './Body';

const cx = classNames.bind(style);
function DefaultLayout({children}) {
    return (
        <div className={cx('DefaultLayout')}>
            <Header />
            <div className={cx('content')}>
                <Content />
                {children}
            </div>
        </div>
    )
}
export  default DefaultLayout;