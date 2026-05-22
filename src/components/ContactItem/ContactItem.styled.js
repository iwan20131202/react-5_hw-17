import styled from "styled-components";

export const Row = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 18px;
  margin-bottom: 14px;

  background: linear-gradient(145deg, #ffffff, #f8faff);

  border: 1px solid #eef2ff;
  border-radius: 18px;

  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.04),
    0 2px 4px rgba(0, 0, 0, 0.03);

  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    border-color: #c7d2fe;

    box-shadow:
      0 10px 24px rgba(99, 102, 241, 0.12),
      0 4px 10px rgba(0, 0, 0, 0.05);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background: linear-gradient(135deg, #ef4444, #dc2626);

  color: white;

  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;

  border: none;
  border-radius: 12px;

  padding: 10px 14px;

  cursor: pointer;

  box-shadow:
    0 4px 10px rgba(239, 68, 68, 0.25),
    0 2px 4px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  &:hover {
    background: linear-gradient(135deg, #dc2626, #b91c1c);

    transform: translateY(-2px);

    box-shadow:
      0 10px 20px rgba(239, 68, 68, 0.35),
      0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.96);
  }

  svg {
    width: 18px;
    height: 18px;
    display: block;

    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: rotate(-8deg) scale(1.1);
  }
`;
