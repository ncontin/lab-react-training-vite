import React from "react";

function CreditCard(props) {
  return (
    <div>
      <div>type: {props.type}</div>
      <div>number: {props.number}</div>
      <div>expirationMonth: {props.expirationMonth}</div>
      <div>expirationYear: {props.expirationYear}</div>
      <div>bank: {props.bank}</div>
      <div>owner: {props.owner}</div>
    </div>
  );
}

export default CreditCard;
