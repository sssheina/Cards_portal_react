import React from "react";

import cards from "./cards";
import CardCourse from "./CardCourse";

import "./CardslistCourses.scss";

class CardslistCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCardIndex: 0,
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="pageTitle">
            <div className="imgTitle"></div>
            <div className="mainTitle title">Готова учиться?</div>
          </div>

          <div className="selectCourse">
            <select className="selectDropdown" defaultValue="Все направления">
              <option className="optionDropdown" value="Дизайн">
                Дизайн
              </option>
              <option className="optionDropdown" value="Все направления">
                Все направления
              </option>
              <option className="optionDropdown" value="Программирование">
                Программирование
              </option>
              <option className="optionDropdown" value="Маркетинг">
                Маркетинг
              </option>
              <option className="optionDropdown" value="Управление">
                Управление
              </option>
              <option className="optionDropdown" value="Игры">
                Игры
              </option>
            </select>
          </div>

          <div className="buttonsContainer">
            <button className="buttonFilter">
              <div className="imgFilter"></div>
              <span className="buttonSpan">Фильтр</span>
            </button>
            <button className="buttonSearch">
              <div className="imgSearch"></div>
              <span className="buttonSpan">Поиск</span>
            </button>
          </div>

          <div className="blockTitle">
            <div className="titleCards title">Курс-профессия</div>
            <button className="buttonCards">?</button>
          </div>

          <div className="blockCards">
            {cards.map((card, index) => (
              <CardCourse key={index} {...card} />
            ))}
          </div>

          <div className="blockTitle">
            <div className="titleCards title">Курс-навык</div>
            <button className="buttonCards">?</button>
          </div>

          <div className="lowerSide">
            <nav className="tab-list  " data-selected="0">
              <div className="tab-icons" data-selected="1">
                <a
                  className="tab-link selected-tab initialised  active"
                  data-index="0"
                  href="#"
                  aria-current="page"
                >
                  <div className="tab-icon tab-icon_0"></div>
                </a>
                <a className="tab-link false" data-index="1" href="#">
                  <div className="tab-icon tab-icon_1"></div>
                </a>
                <a className="tab-link false" data-index="2" href="#">
                  <div className="tab-icon tab-icon_2"></div>
                </a>
              </div>
              <div className="bar">
                <div className="cap"></div>
                <div className="middle">
                  <div className="side"></div>
                  <div className="circle"></div>
                  <div className="side"></div>
                  <div className="side"></div>
                </div>
                <div className="cap"></div>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default CardslistCourses;
