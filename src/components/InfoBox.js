import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

const InfoBox = ({ title, cases, total, handleClick, isActive, isRed }) => {
  return (
    <Card
      onClick={handleClick}
      className={`infobox ${isActive && "infobox-selected"} ${
        isRed && "infobox-red"
      }`}
    >
      <CardContent>
        <Typography className="title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`cases ${!isRed && "info-green"} `}>{cases}</h2>
        <Typography className="total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
