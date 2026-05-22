import styled from "styled-components";

export const AppWrapper = styled.div`
  max-width: 460px;
  margin: 50px auto;
  padding: 28px;
  border-radius: 24px;
  background: linear-gradient(145deg, #ffffff, #f5f7ff);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 4px 12px rgba(0, 0, 0, 0.04);

  font-family: "DM Sans", sans-serif;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 14px 40px rgba(0, 0, 0, 0.12),
      0 6px 16px rgba(0, 0, 0, 0.06);
  }
`;

export const Title = styled.h1`
  font-family: "Cabin", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  color: #1f2937;
  letter-spacing: -0.5px;

  svg {
    width: 32px;
    height: 32px;
    display: block;
    color: #6366f1;
    filter: drop-shadow(0 2px 6px rgba(99, 102, 241, 0.4));
  }
`;

export const Subtitle = styled.h2`
  font-family: "Cabin", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;

  margin-top: 28px;
  margin-bottom: 14px;

  color: #374151;
  position: relative;
  padding-left: 14px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 4px;

    width: 4px;
    height: 24px;
    border-radius: 10px;

    background: linear-gradient(to bottom, #6366f1, #8b5cf6);
  }
`;
