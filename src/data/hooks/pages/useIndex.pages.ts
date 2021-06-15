import { useState, useMemo } from "react";
import { UserShortIntrface } from "data/@types/userInterface";
import { ValidationService } from "data/services/ValidationService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => ValidationService.cep(cep), [cep]),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortIntrface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);
  return {
    cep,
    setCep,
    cepValido,
  };
}
