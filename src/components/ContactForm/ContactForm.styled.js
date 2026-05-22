import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  padding: 28px;

  background: linear-gradient(145deg, #ffffff, #f8faff);

  border: 1px solid #eef2ff;
  border-radius: 24px;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.06),
    0 4px 10px rgba(0, 0, 0, 0.04);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow:
      0 16px 40px rgba(99, 102, 241, 0.08),
      0 6px 16px rgba(0, 0, 0, 0.05);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  font-weight: 600;

  color: #374151;
  letter-spacing: 0.2px;
`;

export const Input = styled.input`
  padding: 14px 16px;

  border: 1.5px solid #d1d5db;
  border-radius: 14px;

  background: #ffffff;

  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  color: #1f2937;

  outline: none;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);

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
    border-color: #6366f1;

    transform: translateY(-1px);

    box-shadow:
      0 0 0 4px rgba(99, 102, 241, 0.15),
      0 6px 14px rgba(99, 102, 241, 0.12);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-top: 6px;
  padding: 14px;

  border: none;
  border-radius: 16px;

  background: linear-gradient(135deg, #8b5cf6, #6366f1);

  color: white;

  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  box-shadow:
    0 8px 20px rgba(99, 102, 241, 0.25),
    0 4px 10px rgba(0, 0, 0, 0.05);

  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  &:hover {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);

    transform: translateY(-2px);

    box-shadow:
      0 14px 28px rgba(99, 102, 241, 0.35),
      0 6px 12px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: scale(0.97);
  }

  svg {
    width: 18px;
    height: 18px;
    display: block;

    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: rotate(-10deg) scale(1.1);
  }
`;
