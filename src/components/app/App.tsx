import {  CSSProperties, useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { ArticleStateType, defaultArticleState } from '../../constants/articleProps';
import '../../styles/index.scss';
import styles from './index.module.scss';
import {useDisclosure} from '../../hooks/useDisclosure'



export const App = () => {
    const [primeOptions, setPrimeOptions] = useState(defaultArticleState)



    const setStyles = (options: ArticleStateType ) => {
        setPrimeOptions(options)
    };


    return (
        <div
        className={clsx(styles.main)}
        style={{
            '--font-family': primeOptions.fontFamilyOption.value,
            '--font-size': primeOptions.fontSizeOption.value,
            '--font-color': primeOptions.fontColor.value,
            '--container-width': primeOptions.contentWidth.value,
            '--bg-color': primeOptions.backgroundColor.value,
        } as CSSProperties}>
            <ArticleParamsForm  setStyles={setStyles}  />
            <Article />
        </div>
    );
};
