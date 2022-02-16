import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.17;
  color: #fff;
  margin-bottom: 50px;
  text-shadow: 5px 6px 4px #000;

  &:hover {
    color: #030000;
    text-shadow: 0 2px 1px #9e0b0b, 0 5px 4px #9e0b0b, 0 11px 8px #9e0b0b,
      0 20px 15px #5c1c1c;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;
