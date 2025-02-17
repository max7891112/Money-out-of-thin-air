import style from "./strategy.module.scss";
import clsx from "clsx";
import { useState } from "react";


const dataServer = { 
  base: [
    ["Классика","Доход: низкий","Сложность: простая","Временные затраты: 5 - 10 минут в день", "classicSt"],
    ["Классика +","Доход: низко-средний","Сложность: простая","Временные затраты: 5 - 10 минут в день", 'classicSt+'],
    ["Классика + инвестиции","Доход: средний","Сложность: средняя","Временные затраты: 10 - 15 минут в день", "classicInvSt"]
  ],
  medium: [
    ["Посвященный","Доход: средне-высокий","Сложность: средне-сложная","Временные затраты: 15 - 20 минут в день", "intermediateSt"],
    ["Посвященный +","Доход: высокий","Сложность: средне-сложная","Временные затраты: 15 - 20 минут в день", "intermediateSt+"],
    ["Посвященный + ИИС","Доход: высокий","Сложность: сложная","Временные затраты: 20 - 25 минут в день", "intermedaateIisSt"]
  ],
  master: [
    ["Высший класс","Доход: максимальный","Сложность: высокая","Временные затраты: 25 - 60 минут в день", "highClassSt"],
  ]
}
  

export const Strategy = () => {
  const [strategyLvl, setStrategyLvl] = useState('base')
  const data = dataServer[strategyLvl as keyof typeof dataServer]
  return (
    <>
      <section className={style.strategy}>
        <div className={clsx("_content-frame", style.wrapper)}>
          <h2 className={clsx(style.title, '_white-color')}>
            Воспользуйтесь
            <br /> готовыми
            <br /> стратегиями
            <br /> получения прибыли
          </h2>
          <div className={style.container}>
            <div className={style.type}>
              <p onClick={()=> setStrategyLvl('base')} className={strategyLvl === 'base' ? style._active : ''}>Базовые</p>
              <p onClick={()=> setStrategyLvl('medium')} className={strategyLvl === 'medium' ? style._active : ''}>Продвинутые</p>
              <p onClick={()=> setStrategyLvl('master')} className={strategyLvl === 'master' ? style._active : ''}>Мастер</p>
            </div>
            <div className={style.cards}>
            {data.map((item: string[])=> {
              return (
                <div className={clsx(style.card, '_white-color')}>
                  <h3 className={style.cardTitle}>{item[0]}</h3>
                  <div className={style.cardDescription}>
                    <p>{item[1]}</p>
                    <p>{item[2]}</p>
                    <p>{item[3]}</p>
                  </div>
                  <a className={style.link}>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 35L35 1M35 1H1M35 1V35" />
                    </svg>
                  </a>
                </div>
              )
              })}
            </div>
            <button className={style.button}>Все стратегии</button>
          </div>
        </div>
      </section>
    </>
  );
};
