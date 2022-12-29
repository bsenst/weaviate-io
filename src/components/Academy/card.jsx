import React from 'react';

function AcademyCard(props) {

  let badgeClass = ""
  let badgeTxt = ""
  let btnClass = ""
  let btnTxt = ""

  if (props.badgeType == "theory") {
    badgeClass = "badge badge--success";
    badgeTxt = "Theory";
  } else if (props.badgeType == "practical") {
    badgeClass = "badge badge--info";
    badgeTxt = "Practical";
  } else if (props.badgeType == "course") {
    badgeClass = "badge badge--primary";
    badgeTxt = "Course";    
  } else if (props.badgeType == "mixed") {
    badgeClass = "badge badge--warning";
    badgeTxt = "Mixed";    
  } else {
    badgeClass = "badge badge--secondary";
    badgeTxt = "Other";
  };
  
  if (props.buttonType == "Notify") {
    btnClass = "button button--outline button--secondary button--block";
    btnTxt = "Notify me when ready";
  } else {
    btnClass = "button button--secondary button--block";
    btnTxt = props.buttonType;
  };

  // const badgeClass = "badge badge--note";
  // const badgeTxt = props.badgeType;

  return (
    <div class="card __academycard">
      <div class="card__header">
        <h3>{props.title}</h3>
      </div>
      <div class="card__body">
        <span class={badgeClass}>{badgeTxt}</span>
        <p>
        {props.body}
        </p>
      </div>
      <div class="card__footer">
        <button class={btnClass}>{btnTxt}</button>
      </div>
    </div>
  )
};

export default AcademyCard;