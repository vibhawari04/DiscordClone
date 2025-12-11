import React from "react";
import { styled } from "@mui/system";

const Separator = styled("div")({
  width: "95%",
  backgroundColor: "#b9bbbe",
  height: "1px",
  position: "relative",
  marginTop: "20px",
  marginBottom: "10px",
});

const DateLable = styled("span")({
  backgroundColor: "#36393f",
  position: "absolute",
  left: "45%",
  top: "-10px",
  color: "#b9bbbe",
  padding: "0 5px",
  fontsize: "14px",
});
const DateSeparator = ({ date }) => {
  return (
    <Separator>
      <DateLable>{date}</DateLable>
    </Separator>
  );
};

export default DateSeparator;
