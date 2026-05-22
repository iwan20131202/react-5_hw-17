import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 18px;

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
