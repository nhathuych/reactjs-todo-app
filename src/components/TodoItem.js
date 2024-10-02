import React from "react";
import Button from "@atlaskit/button";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left !important;
`;

{/* receive a props from the parents */}
export default function TodoItem({todo}) {
  return (
    <div>
      <ButtonStyled shouldFitContainer>{todo.body}</ButtonStyled>
    </div>
  );
}
