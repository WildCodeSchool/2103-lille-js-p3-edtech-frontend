import styled from 'styled-components';

const SAccord = styled.div`
  @media (min-width: 600px) {
    display: none;
  }

  padding: 20px;
  .accordion {
    border-radius: 2px;
    width: 50%;
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

export default SAccord;
