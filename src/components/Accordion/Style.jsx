import styled from 'styled-components';

const SAccord = styled.div`
  @media (min-width: 600px) {
    display: none;
  }

  .sc-gtsrHT bnWiUp {
    width: 80%;
    margin: auto;
  }

  .accordion {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  .accordion__item + .accordion__item {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .accordion__button {
    background-color: #0b267c;
    color: #ddd;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
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

  [hidden] {
    display: none;
  }

  .accordion__panel {
    padding: 20px;
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
