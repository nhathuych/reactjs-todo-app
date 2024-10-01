import React from "react";
import Button from "@atlaskit/button";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left !important;
`;

export default function TodoItem() {
  return (
    <div>
      <ButtonStyled shouldFitContainer>This is my task</ButtonStyled>
    </div>
  );
}
