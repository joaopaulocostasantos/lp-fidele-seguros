"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useUtm } from "@/hooks/useUtm";
import { sendLeadToWebhook } from "@/services/webhook";
import { trackFormStart, trackLead, trackQualifiedLead } from "@/utils/analytics";
import { formatPhone } from "@/lib/utils";
import type { WebhookPayload } from "@/types";

import {
  Shield,
  ArrowRight,
  Check,
  Loader2,
  MessageCircle,
} from "lucide-react";

const schema = z.object({
  name: z.string().min(3, "Informe seu nome completo"),
  email: z.string().email("E-mail inválido"),
  hasPlan: z.string().min(1, "Selecione uma opção"),
  planTime: z.string().min(1, "Selecione uma opção"),
  planPeople: z.string().min(1, "Selecione uma opção"),
  phone: z.string().min(14, "WhatsApp inválido"),
});

type FormData = z.infer<typeof schema>;

const trustItems = [
  "Diagnóstico gratuito e sem compromisso",
  "Retorno em até 24h úteis",
  "Seus dados 100% protegidos (LGPD)",
  "+300 famílias já atendidas",
];

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const utms = useUtm();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleFormStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackFormStart();
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const payload: WebhookPayload = {
        ...data,
        utms,
        timestamp: new Date().toISOString(),
        page_url: window.location.href,
      };

      await sendLeadToWebhook(payload);

      const isQualified =
        data.hasPlan === "sim" &&
        ["3-5", "mais-5"].includes(data.planTime) &&
        !["1", "2"].includes(data.planPeople);

      trackLead({ value: isQualified ? "qualified" : "standard" });
      if (isQualified) trackQualifiedLead(payload as unknown as Record<string, unknown>);

      router.push("/obrigado");
    } catch (err) {
      console.error("Form submission error:", err);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario" className="relative py-24 bg-[#111948] overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#FFCC00]/5" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#21A621]/8" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFCC00]/0 via-[#FFCC00]/30 to-[#FFCC00]/0" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFCC00]/30 bg-[#FFCC00]/10 px-4 py-1.5 text-sm text-[#FFCC00] font-medium">
              <Shield className="h-3.5 w-3.5" />
              Consultoria gratuita
            </div>
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Quanto você está deixando{" "}
              <span className="text-[#FFCC00]">na mesa todo mês?</span>
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
              Famílias com 3 a 5 pessoas que revisaram o plano com a Fidele descobriram alternativas com a mesma rede por menos. O diagnóstico leva menos de 15 minutos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 rounded-2xl bg-white p-6 md:p-8 shadow-2xl shadow-black/20"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                onFocus={handleFormStart}
                noValidate
                className="space-y-5"
              >
                {/* Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    placeholder="Nome completo"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                </div>

                {/* Has plan */}
                <div className="space-y-1.5">
                  <Label>Possui plano de saúde atualmente? *</Label>
                  <Controller
                    name="hasPlan"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger error={errors.hasPlan?.message}>
                          <SelectValue placeholder="Possui plano de saúde atualmente?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sim">Sim</SelectItem>
                          <SelectItem value="nao">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                {/* Plan time */}
                <div className="space-y-1.5">
                  <Label>Há quanto tempo possui o plano? *</Label>
                  <Controller
                    name="planTime"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger error={errors.planTime?.message}>
                          <SelectValue placeholder="Há quanto tempo possui o plano?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="menos-1">Menos de 1 ano</SelectItem>
                          <SelectItem value="1-2">1 a 2 anos</SelectItem>
                          <SelectItem value="3-5">3 a 5 anos</SelectItem>
                          <SelectItem value="mais-5">Mais de 5 anos</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                {/* Plan people */}
                <div className="space-y-1.5">
                  <Label>Quantas pessoas estão no plano? *</Label>
                  <Controller
                    name="planPeople"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger error={errors.planPeople?.message}>
                          <SelectValue placeholder="Quantas pessoas estão no plano?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 pessoa</SelectItem>
                          <SelectItem value="2">2 pessoas</SelectItem>
                          <SelectItem value="3">3 pessoas</SelectItem>
                          <SelectItem value="4">4 pessoas</SelectItem>
                          <SelectItem value="5">5 pessoas</SelectItem>
                          <SelectItem value="6+">6 ou mais pessoas</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label htmlFor="phone">WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="WhatsApp com DDD"
                    error={errors.phone?.message}
                    {...register("phone")}
                    onChange={(e) => {
                      const formatted = formatPhone(e.target.value);
                      setValue("phone", formatted, { shouldValidate: !!watch("phone") });
                    }}
                  />
                </div>

                {/* Privacy notice */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ao enviar, você concorda com nossa{" "}
                  <a href="#" className="text-[#111948] font-medium hover:underline">
                    Política de Privacidade
                  </a>{" "}
                  e autoriza o contato por WhatsApp/e-mail. Seus dados são protegidos pela LGPD.
                </p>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="premium"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando sua solicitação...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-5 w-5" />
                      Quero meu diagnóstico gratuito
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Trust sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-4"
            >
              {/* Trust card */}
              <div className="rounded-2xl border border-white/10 bg-white/8 backdrop-blur-sm p-6">
                <h3 className="text-base font-semibold text-white mb-4">
                  Por que preencher?
                </h3>
                <ul className="space-y-3">
                  {trustItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#21A621]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process preview */}
              <div className="rounded-2xl border border-white/10 bg-white/8 backdrop-blur-sm p-6">
                <h3 className="text-sm font-semibold text-white mb-4">
                  O que acontece depois?
                </h3>
                <ol className="space-y-3">
                  {[
                    "Recebemos seu formulário",
                    "Especialista entra em contato em até 24h",
                    "Diagnóstico gratuito do seu plano",
                    "Comparamos com alternativas da mesma rede",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFCC00] text-[11px] font-bold text-[#111948]">
                        {i + 1}
                      </span>
                      <span className="text-sm text-white/60">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
