import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
    onClick: () => void;
}

export default function Button({ onClick }: ButtonProps) {
    return <ButtonContainer onClick={onClick}>Buscar</ButtonContainer>;
} // Path: src/components/Button/index.tsx
