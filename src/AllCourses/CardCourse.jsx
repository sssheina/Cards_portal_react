import React from "react";

import "./CardslistCourses.scss";

class CardCourse extends React.Component {
  render() {
    const {
      titleCourse,
      lessons,
      span_1,
      span_2,
      span_3,
      backgroundColor,
      className,
      progress,
    } = this.props;

    return (
      <div className="cardItem" style={{ backgroundColor: backgroundColor }}>
        <div class="cardContent">
          <div class="cardCourse">
            <div class="cardName">{titleCourse}</div>
            <div class="cardInfo">
              <span class="cardSpan">{lessons}</span>
            </div>
          </div>
          <div class="blockTags">
            <span class="cardTag">{span_1}</span>
            <span class="cardTag">{span_2}</span>
            <span class="cardTag">{span_3}</span>
          </div>
        </div>
        <div class={`cardProgress ${className}`}>{progress}</div>
      </div>
    );
  }
}

export default CardCourse;
