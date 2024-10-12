import arrow from 'src/images/arrow.svg';
import { clsx } from 'clsx';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;
interface ArrowButtonProps {
    open?:  boolean;
    onClick?: OnClick

}

export const ArrowButton: React.FC<ArrowButtonProps> = ({open, onClick}) => {
    const classNameContainer = clsx({
        [styles.container]: true,
        [styles.container_open]: open,
    });
    const classNameArrow = clsx({
        [styles.arrow]: true,
        [styles.arrow_open]: open,
    });

    return (
        /* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
        <div
            onClick={onClick}
            role='button'
            aria-label='Открыть/Закрыть форму параметров статьи'
            tabIndex={0}
            className={classNameContainer} >
            <img src={arrow} alt='иконка стрелочки' className={classNameArrow} />
        </div>
    );
};
