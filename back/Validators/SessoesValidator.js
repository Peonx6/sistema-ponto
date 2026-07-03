import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import mongoose from "mongoose";

const idParamSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, { message: "ID da sessão inválido" }),
});

const create = validateRequest({
  body: z.object({
    id_usuario: z.string({ required_error: "O ID do usuário é obrigatório" })
      .refine((val) => mongoose.isValidObjectId(val), { message: "ID do usuário inválido" }),
  }),
});

const idParam = validateRequest({
  params: idParamSchema,
});

const update = validateRequest({
  params: idParamSchema,
  body: z.object({
    id_usuario: z.string()
      .refine((val) => mongoose.isValidObjectId(val), { message: "ID do usuário inválido" })
      .optional(), 
  }),
});

export default {
  create,
  idParam,
  update,
};