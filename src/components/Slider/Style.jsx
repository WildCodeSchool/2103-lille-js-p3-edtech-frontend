import styled from 'styled-components';

const Sslider = styled.div`
  @media (max-width: 400px) {
    display: none;
  }
  .each-slide {
    position: relative;
    height: 50vh;
  }

  .each-slide > div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: left;
    background-size: cover;
    height: 50vh;
  }

  .each-slide .each-text {
    font-size: 1.1em;
    background-color: ${(props) => props.background};
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    justify-content: center;
    color: ${(props) => props.text};
    width: 50vw;
  }
  .each-img {
    width: 100%;
  }

  .slider-text {
    text-align: justify;
    margin-left: 200px;
    margin-right: 30px;
    @media (max-width: 800px) {
      height: 20%;
      font-size: 0.9em;
      margin-left: 0px;
    }
  }
  .each-title {
    display: flex;
    text-align: justify;
    font-size: 1.5em;
    font-weight: bold;
    padding-bottom: 20px;
    margin-left: 200px;
    @media (max-width: 800px) {
      font-size: 0.9em;
      margin-left: 0px;
    }
  }
`;

const SAccord = styled.div`
  @media (min-width: 450px) {
    display: none;
  }
  padding-top: 10px;

  .accordion {
    border-radius: 2px;
    width: 90%;
    margin: auto;
    border: none;
  }

  .accordion__button {
    display: flex;
    background-color: #0b267c;
    color: #ddd;
    cursor: pointer;
    padding-bottom: 18px;
    padding-top: 18px;
    padding-right: 0px;
    padding-left: 18px;
    text-align: left;
    width: inherit;
  }

  .accordion__item {
    width: 100%;
  }

  .accordion__button:hover {
    background-color: #0b267c;
  }

  .accordion__button:before {
    display: inline-block;
    content: '';
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
  }

  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);
  }

  h2 {
    align-content: center;
    font-size: 0.9em;
  }

  .subtext {
    font-size: 0.9em;
    text-align: justify;
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    padding: 15px;
    animation: fadein 0.35s ease-in;
  }

  /* -------------------------------------------------- */
  /* ---------------- Animation part ------------------ */
  /* -------------------------------------------------- */

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export { SAccord, Sslider };
