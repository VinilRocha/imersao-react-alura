import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 18em;
  width: 18em;
  height: 11em;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 120%;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  position: relative;

  transition: all .8s;
  &:hover,
  &:focus {
    transform: scale(1.01);
    z-index: 999;
    &:after{
      background-color: transparent;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
  &:after{
    content:'';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgb(0 0 0 / 20%);
    transition: all .5s ease-in-out;
}
`;
