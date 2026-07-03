import { useQuery, useMutation } from "@tanstack/react-query";
import {
  CreateSessao,
  GetSessoes,
  UpdateSessao,
  DeleteSessao,
} from "../services/api/sessoes";


export function useCreateSessao({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({ 
    mutationFn: CreateSessao, 
    onSuccess, 
    onError 
  });
}

export function useGetSessoes() {
  return useQuery({
    queryKey: ["sessoes"],
    queryFn: GetSessoes,
  });
}

export function useUpdateSessao({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({ 
    mutationFn: UpdateSessao, 
    onSuccess, 
    onError 
  });
}

export function useDeleteSessao({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({ 
    mutationFn: DeleteSessao, 
    onSuccess, 
    onError 
  });
}