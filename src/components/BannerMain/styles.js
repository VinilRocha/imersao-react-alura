import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
    padding-bottom: 4em;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  &:first-of-type{
    padding-right: 5em;
    @media (max-width: 800px) {
      padding-right: 0;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: 'Press Start 2P';
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-family: 'Press Start 2P';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 800px) {
    font-size: 22px;
  }
`;

export const BannerMainContainer = styled.section`
  height: 30em;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  padding-top: 5em;
  top: -5em;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
    margin-bottom: -5em;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0em;
    height: 100%;
    background-image: linear-gradient(to bottom,#9c4cb0,rgb(144 76 172 / 0.98),rgb(132 76 167 / 0.98),rgb(120 75 162 / 0.98),rgb(109 74 156 / 0.95),rgb(105 74 156 / 0.93),rgb(101 73 155 / 0.93),rgb(97 73 155 / 0.90),rgb(99 74 161 / 0.90),rgb(100 74 166 / 0.88),rgb(102 75 172 / 0.88),rgb(103 75 178 / 0.88));
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg,#7162ae 5%,transparent 100%);
  }
`;

export const WatchButton = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  border: none;
  color: var(--black);
  background: var(--white);
  border-color: var(--black);
  transition: opacity .3s;
  display: none;
  margin: 0 auto;
  margin-top: 3em;
  @media (max-width: 800px) {
    display: block;
  }
`;