import { useQuery, useMutation } from "@tanstack/react-query";
import {
  createSessao as CreateSessao,
  getSessoes as GetSessoes,
  updateSessao as UpdateSessao,
  deleteSessao as DeleteSessao,
} from "../services/api/endpoint";


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