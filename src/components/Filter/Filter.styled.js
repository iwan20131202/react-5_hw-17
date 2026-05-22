import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 18px;

  font-size: 15px;
  font-weight: 600;
  color: #374151;

  letter-spacing: 0.2px;
`;

export const FilterInput = styled.input`
  padding: 12px 14px;

  border: 1.5px solid #d1d5db;
  border-radius: 14px;

  background: #ffffff;
  color: #1f2937;

  font-family: "DM Sans", sans-serif;
  font-size: 15px;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:hover {
    border-color: #a5b4fc;
  }

  &:focus {
    outline: none;

    border-color: #6366f1;

    box-shadow:
      0 0 0 4px rgba(99, 102, 241, 0.15),
      0 4px 12px rgba(99, 102, 241, 0.12);

    transform: translateY(-1px);
  }
`;
