import { List } from "semantic-ui-react";
import styled from "styled-components";

export const StyledListIcon = styled(List.Icon)`
  cursor: pointer;
`;

export const StyledListContent = styled(List.Content)`
  text-decoration: ${({ checked }) => (checked ? "line-through" : "unset")};
  color: ${({ checked }) => (checked ? "#999" : "unset")};
`;
