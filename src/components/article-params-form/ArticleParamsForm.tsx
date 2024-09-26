import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { Select } from '../select';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';
import { useState } from 'react';
import { clsx } from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import {fontColors, fontFamilyOptions,backgroundColors, fontSizeOptions, defaultArticleState, contentWidthArr, OptionType, ArticleStateType} from 'src/constants/articleProps';

interface ArticleParamsFormProps {
    setStyles: (options: ArticleStateType) => void;
   }

export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({ setStyles }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState({
        fontFamilyOption: defaultArticleState.fontFamilyOption,
        fontSizeOption: defaultArticleState.fontSizeOption,
        fontColor: defaultArticleState.fontColor,
        backgroundColor: defaultArticleState.backgroundColor,
        contentWidth: defaultArticleState.contentWidth,
      });
      const handleInputChanges = (key: keyof ArticleStateType, value: OptionType) => {
        setOptions((prevOptions) => ({
          ...prevOptions,
          [key]: value,
        }));
      };

    const classNameContainer = clsx({
        [styles.container]: true,
        [styles.container_open]: isOpen,
    });

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault();
        setStyles(options)
    }
    const handleReset:React.FormEventHandler<HTMLFormElement> = (e) =>{
        setStyles(defaultArticleState)
        setOptions(defaultArticleState)
    }

    return (
        <>
            <ArrowButton open={isOpen} onClick={()=>{setIsOpen(!isOpen)}} />
            <aside className={classNameContainer}>
                <form onSubmit={handleSubmit} onReset={handleReset} className={styles.form}>
                    <Text size={31} weight={800} uppercase={true}>Задайте параметры</Text>
                    <Select onChange={(value) => handleInputChanges('fontFamilyOption', value)}  selected={options.fontFamilyOption} options={fontFamilyOptions} title={'Шрифт'}/>
                    <RadioGroup onChange={(value) => handleInputChanges('fontSizeOption', value)} name={'fontSizeOption'} selected={options.fontSizeOption} options={fontSizeOptions}  title={'Размер шрифта'}/>
                    <Select onChange={(value) => handleInputChanges('fontColor', value)} selected={options.fontColor} options={fontColors} title={'Цвет шрифта'}/>
                    <Separator />
                    <Select onChange={(value) => handleInputChanges('backgroundColor', value)}  selected={options.backgroundColor} options={backgroundColors} title={'Цвет фона'}/>
                    <Select onChange={(value) => handleInputChanges('contentWidth', value)} selected={options.contentWidth} options={contentWidthArr} title={'Ширина контента'}/>
                    <div className={styles.bottomContainer}>
                        <Button title='Сбросить' type='reset' />
                        <Button title='Применить' type='submit' />
                    </div>
                </form>
            </aside>
        </>
    );
};
