"use server";

import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  businessName: z.string().trim().min(2, "Informe o nome do negócio."),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp válido."),
  businessType: z.string().trim().min(1, "Selecione o tipo de negócio."),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitLead(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    businessName: formData.get("businessName"),
    whatsapp: formData.get("whatsapp"),
    businessType: formData.get("businessType"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Verifique os dados informados.",
    };
  }

  // Destino definitivo do lead (e-mail, webhook, planilha ou banco) ainda não
  // foi decidido. Registramos no log do servidor (visível no painel da Vercel)
  // em vez de simular um envio que não existe.
  console.log("[lead:alo-delivery]", {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message: "Obrigado! Seu interesse foi registrado. Em breve entraremos em contato.",
  };
}
