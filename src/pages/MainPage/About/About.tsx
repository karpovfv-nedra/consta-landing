import './About.css';

import React from 'react';
import { IconForward } from '@consta/uikit/IconForward';
import { IconThumbUp } from '@consta/uikit/IconThumbUp';
import { Text } from '@consta/uikit/Text';
import { useTheme } from '@consta/uikit/Theme';

// import { ReactComponent as ConstaWidgetsLogo } from './../../../constaWidgetsLogo.image.svg';
// import { ReactComponent as ConstaUiKitLogo } from './../../../images/constaUiKitLogo.image.svg';
import { AboutVersionPackage } from './AboutVersionPackage/AboutVersionPackage';
import { AboutVideo } from './AboutVideo/AboutVideo';

import IconFigma from '@/icons/Figma.icon.svg';
import IconGithub from '@/icons/Github.icon.svg';
import IconStorybook from '@/icons/Storybook.icon.svg';
import ConstaUiKitLogo from '@/images/ConstaUiKitLogo.image.svg';
import ConstaWidgetsLogo from '@/images/ConstaWidgetsLogo.image.svg';
// import { constaFigma, constaGitHub, constaUikitButton, licenceMit } from '@/modules/api/links';
import {
  constaFigma,
  constaGitHub,
  constaUikitButton,
  // constaWidgetsBarChart,
  // constaWidgetsFigma,
  // constaWidgetsGitHub,
  licenceMit,
} from '@/modules/api/links';
import { cn } from '@/utils/bem';

const cnAbout = cn('About');

const cnLinks = cn('LinksToLibrary');

const More = (
  <Text
    className={cnLinks('More', [
      'decorator decorator_distribute_left decorator_vertical-align_center decorator_indent-r_s',
    ])}
    size="l"
    as="span"
  >
    Смотреть
    <IconForward
      className={cnLinks('Arrow', ['decorator decorator_indent-l_m'])}
      size="m"
      view="primary"
    />
  </Text>
);

export const About: React.FC = () => {
  const { themeClassNames } = useTheme();
  return (
    <section className={cnAbout(null, ['Container', 'Section'])}>
      <div
        className={cnAbout('Lead', [
          'tpl-grid tpl-grid_col-gap_half tpl-grid_row-gap_full tpl-grid_m-columns_12 decorator decorator_space-b_2xl',
        ])}
      >
        <div className="tpl-grid__fraction tpl-grid__fraction_m-col_8">
          <Text
            className={cnAbout('Title', ['decorator decorator_indent-b_2xl'])}
            size="5xl"
            weight="bold"
            as="h2"
            lineHeight="2xs"
          >
            Что такое дизайн&#8209;система?
          </Text>
          <Text
            className={cnAbout(null, ['decorator decorator_indent-v_none'])}
            size="2xl"
            view="secondary"
            as="p"
          >
            Это библиотека компонентов и понятные правила их взаимодействия — всё, что нужно
            дизайнерам и разработчикам для создания интерфейсов.
          </Text>
        </div>
        <div className="tpl-grid__fraction tpl-grid__fraction_m-col_4 ">
          <AboutVideo />
        </div>
      </div>
      <Text
        className={cnAbout('Title', ['decorator decorator_indent-t_3xl decorator_indent-b_l'])}
        size="3xl"
        weight="bold"
        as="h3"
        lineHeight="xs"
      >
        Компоненты
      </Text>
      <Text
        className={cnAbout('Title', ['decorator decorator_indent-b_5xl'])}
        size="2xl"
        view="secondary"
        as="p"
      >
        Кнопки, иконки, списки, таблицы и другие элементы, из которых собирается интерфейс. Похоже
        на брендбук или гайдлайн, только удобнее: любой элемент можно взять в готовом виде и сразу
        добавить к себе.
      </Text>

      <div className={cnAbout('Links', [cnLinks(), 'decorator decorator_indent-b_2xl'])}>
        <ConstaUiKitLogo />
        <ConstaWidgetsLogo />
        <Text
          className={cnAbout('Title', ['decorator decorator_indent-b_xl'])}
          size="2xl"
          view="secondary"
          as="p"
        >
          Тут будет описание UI kit, подробное, чтобы было понятно что происходит
        </Text>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            columnGap: 'var(--space-l)',
          }}
        >
          {[
            {
              title: 'Всем-всем',
              subTitle:
                'Витрина готовых компонентов с подробной документацией и правилами использования.',
              hasVersion: false,
              icon: 'storybook',
              href: constaUikitButton,
            },
            {
              title: 'Дизайнерам',
              subTitle: 'Правила использования и библиотека компонентов в Figma Community.',
              hasVersion: false,
              icon: 'figma',
              href: constaFigma,
            },
            {
              title: 'Разработчикам',
              subTitle: 'Библиотека компонентов в виде NPM пакета на Github.',
              hasVersion: true,
              icon: 'github',
              href: constaGitHub,
            },
          ].map((item) => (
            <>
              <a
                href={item.href}
                target="_blank"
                className={cnLinks(
                  'Item',
                  { to: `${item.icon[0].toUpperCase()}${item.icon.slice(1)}` },
                  [themeClassNames.color.accent],
                )}
              >
                {/* <div className={cnLinks('Content', ['tpl-grid tpl-grid_l-ratio_1-1'])}> */}
                {/* <div className="tpl-grid__fraction"> */}
                <div>
                  <Text
                    className={cnLinks('Title', ['decorator decorator_indent-b_m'])}
                    size="2xl"
                    weight="bold"
                    as="h3"
                    lineHeight="xs"
                  >
                    {item.title}
                  </Text>
                  {/* </div> */}
                  <Text className={cnLinks('Text')} size="l" as="p">
                    {item.subTitle}
                  </Text>
                  {/* </div> */}
                  {item.hasVersion && (
                    <div
                      className={cnLinks('Text', [
                        item.hasVersion ? 'decorator decorator_indent-t_m' : '',
                      ])}
                    >
                      <AboutVersionPackage />
                    </div>
                  )}
                </div>

                <div className={cnLinks('Footer', ['decorator decorator_distribute_between'])}>
                  {/* {() => {
                    return {
                      storybook: <IconStorybook size="m" view="primary" className={cnLinks('Logo')} />,
                      figma: <IconFigma size="m" view="primary" className={cnLinks('Logo')} />,
                      github: <IconGithub size="m" view="primary" className={cnLinks('Logo')} />,
                    }[item.icon];
                  }} */}

                  {item.icon === 'storybook' && (
                    <IconStorybook size="m" view="primary" className={cnLinks('Logo')} />
                  )}
                  {item.icon === 'figma' && (
                    <IconFigma size="m" view="primary" className={cnLinks('Logo')} />
                  )}
                  {item.icon === 'github' && (
                    <IconGithub size="m" view="primary" className={cnLinks('Logo')} />
                  )}

                  {More}
                </div>
              </a>
            </>
          ))}
        </div>
      </div>

      {/* <div className={cnAbout('Links', [cnLinks(), 'decorator decorator_indent-b_2xl'])}>
        <a
          href={constaUikitButton}
          target="_blank"
          className={cnLinks('Item', { to: 'Storybook' }, [themeClassNames.color.accent])}
        >
          <div className={cnLinks('Content', ['tpl-grid tpl-grid_l-ratio_1-1'])}>
            <div className="tpl-grid__fraction">
              <Text
                className={cnLinks('Title', ['decorator decorator_indent-b_xl'])}
                size="3xl"
                weight="bold"
                as="h3"
                lineHeight="xs"
              >
                Всем-всем
              </Text>
            </div>
            <Text className={cnLinks('Text')} size="xl" as="p">
              Витрина готовых компонентов с подробной документацией и правилами использования.
            </Text>
          </div>

          <div className={cnLinks('Footer', ['decorator decorator_distribute_between'])}>
            <IconStorybook size="m" view="primary" className={cnLinks('Logo')} />
            {More}
          </div>
        </a>

        <a
          href={constaFigma}
          target="_blank"
          className={cnLinks('Item', { to: 'Figma' }, [themeClassNames.color.invert])}
        >
          <div className={cnLinks('Content')}>
            <Text
              className={cnLinks('Title', ['decorator decorator_indent-b_xl'])}
              size="3xl"
              weight="bold"
              as="h3"
              lineHeight="xs"
            >
              Дизайнерам
            </Text>
            <Text className={cnLinks('Text')} size="xl" as="p">
              Правила использования и библиотека компонентов в Figma Community.
            </Text>
          </div>

          <div className={cnLinks('Footer', ['decorator decorator_distribute_between'])}>
            <IconFigma size="m" view="primary" className={cnLinks('Logo')} />
            {More}
          </div>
        </a>

        <a
          href={constaGitHub}
          target="_blank"
          className={cnLinks('Item', { to: 'Github' }, [themeClassNames.color.invert])}
        >
          <div className={cnLinks('Content')}>
            <Text
              className={cnLinks('Title', ['decorator decorator_indent-b_xl'])}
              size="3xl"
              weight="bold"
              as="h3"
              lineHeight="xs"
            >
              Разработчикам
            </Text>
            <Text className={cnLinks('Text', ['decorator decorator_indent-b_s'])} size="xl" as="p">
              Библиотека компонентов в виде NPM-пакета на GitHub
            </Text>
            <AboutVersionPackage />
          </div>

          <div className={cnLinks('Footer', ['decorator decorator_distribute_between'])}>
            <IconGithub size="m" view="primary" className={cnLinks('Logo')} />
            {More}
          </div>
        </a>
      </div> */}

      <div className="decorator decorator_distribute_center decorator_vertical_align_baseline">
        <IconThumbUp
          size="m"
          view="secondary"
          className="decorator decorator_indent-r_m"
          style={{ flexShrink: 0 }}
        />
        <Text size="l" view="secondary" as="p">
          Дизайн-систему можно использовать бесплатно, она распространяется ПАО «Газпром нефть» на
          условиях открытой 
          <Text href={licenceMit} target="_blank" size="l" view="link" as="a">
            лицензии MIT
          </Text>
          .
        </Text>
      </div>
    </section>
  );
};
