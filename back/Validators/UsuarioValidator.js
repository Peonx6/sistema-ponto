import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const idParamSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, { message: "ID inválido formato MongoDB" }),
});

const create = validateRequest({
  body: z.object({
    email: z.string({ required_error: "Email é obrigatório" }).email("Formato de email inválido"),
    senha: z.string({ required_error: "Senha é obrigatória" }).min(6, "A senha deve ter no mínimo 6 caracteres"),
    nome: z.string({ required_error: "Nome é obrigatório" }).min(1),
    cargo: z.string({ required_error: "Cargo é obrigatório" }).min(1),
    status: z.string().optional(),
  }),
});

const idParam = validateRequest({
  params: idParamSchema,
});

const update = validateRequest({
  params: idParamSchema,
  body: z.object({
    email: z.string().email("Formato de email inválido").optional(),
    senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").optional(),
    nome: z.string().min(1).optional(),
    cargo: z.string().min(1).optional(),
    status: z.string().optional(),
  }),
});

export default {
  create,
  idParam,
  update,
};