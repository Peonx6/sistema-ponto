import { useQuery, useMutation } from "@tanstack/react-query";
import {
  createUsuario as CreateUsuario,
  getUsuarios as GetUsuarios,
  getUsuario as GetUsuario,
  updateUsuario as UpdateUsuario,
  deleteUsuario as DeleteUsuario,
} from "../services/api/endpoint";

export function useCreateUsuario({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({
    mutationFn: CreateUsuario,
    onSuccess,
    onError,
  });
}

export function useGetUsuarios() {
  return useQuery({
    queryKey: ["usuarios"],
    queryFn: GetUsuarios,
  });
}

export function useGetUsuario(id) {
  return useQuery({
    queryKey: ["usuario", id],
    queryFn: () => GetUsuario(id),
    enabled: !!id,
  });
}

export function useUpdateUsuario({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({
    mutationFn: ({ id, dados }) => UpdateUsuario(id, dados),
    onSuccess,
    onError,
  });
}

export function useDeleteUsuario({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({
    mutationFn: DeleteUsuario,
    onSuccess,
    onError,
  });
}
