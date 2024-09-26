import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { ArticleStateType, defaultArticleState, FontFamiliesClasses, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);


const App = () => {
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

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
