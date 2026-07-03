import { useQuery, useMutation } from "@tanstack/react-query";
import {
  CreateUsuario,
  GetUsuarios,
  UpdateUsuario,
  DeleteUsuario,
} from "../services/api/usuarios";


export function useCreateUsuario({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({ 
    mutationFn: CreateUsuario, 
    onSuccess, 
    onError 
  });
}

export function useGetUsuarios() {
  return useQuery({
    queryKey: ["usuarios"],
    queryFn: GetUsuarios,
  });
}

export function useUpdateUsuario({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({ 
    mutationFn: UpdateUsuario, 
    onSuccess, 
    onError 
  });
}

export function useDeleteUsuario({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({ 
    mutationFn: DeleteUsuario, 
    onSuccess, 
    onError 
  });
}