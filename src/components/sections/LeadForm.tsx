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
  phone: z.string().min(14, "Telefone inválido"),
  hasCnpj: z.string().min(1, "Selecione uma opção"),
  companySize: z.string().min(1, "Selecione o número de vidas"),
  cnpjType: z.string().min(1, "Selecione o tipo de CNPJ"),
  currentOperator: z.string().min(1, "Selecione sua operadora atual"),
  mainPain: z.string().min(1, "Selecione sua principal dor"),
});

type FormData = z.infer<typeof schema>;

const trustItems = [
  "Análise gratuita e sem compromisso",
  "Retorno em até 24h úteis",
  "Seus dados 100% protegidos (LGPD)",
  "+300 empresas já atendidas",
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
        data.hasCnpj === "sim" &&
        !["menos-5", "nao-sei"].includes(data.companySize);

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
              Fale com um especialista{" "}
              <span className="text-[#FFCC00]">da Fidele.</span>
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
              Preencha o formulário e receba uma análise gratuita do seu plano atual com recomendações personalizadas.
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
                    placeholder="Ex: João Silva"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">E-mail corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ex: joao@empresa.com"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 9 9999-9999"
                      error={errors.phone?.message}
                      {...register("phone")}
                      onChange={(e) => {
                        const formatted = formatPhone(e.target.value);
                        setValue("phone", formatted, { shouldValidate: !!watch("phone") });
                      }}
                    />
                  </div>
                </div>

                {/* Has CNPJ */}
                <div className="space-y-1.5">
                  <Label>Sua empresa possui CNPJ ativo? *</Label>
                  <Controller
                    name="hasCnpj"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger error={errors.hasCnpj?.message}>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sim">Sim, possuo CNPJ ativo</SelectItem>
                          <SelectItem value="nao">Não, ainda não tenho</SelectItem>
                          <SelectItem value="em-abertura">Estou em processo de abertura</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                {/* Company size + CNPJ type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>Quantas vidas na empresa? *</Label>
                    <Controller
                      name="companySize"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger error={errors.companySize?.message}>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="menos-5">Menos de 5 vidas</SelectItem>
                            <SelectItem value="5-10">5 a 10 vidas</SelectItem>
                            <SelectItem value="11-30">11 a 30 vidas</SelectItem>
                            <SelectItem value="31-50">31 a 50 vidas</SelectItem>
                            <SelectItem value="51-100">51 a 100 vidas</SelectItem>
                            <SelectItem value="mais-100">Mais de 100 vidas</SelectItem>
                            <SelectItem value="nao-sei">Não sei ao certo</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Tipo do CNPJ *</Label>
                    <Controller
                      name="cnpjType"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger error={errors.cnpjType?.message}>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ltda">LTDA / SRL</SelectItem>
                            <SelectItem value="sa">S/A</SelectItem>
                            <SelectItem value="mei">MEI</SelectItem>
                            <SelectItem value="eireli">EIRELI</SelectItem>
                            <SelectItem value="slu">SLU</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>

                {/* Current operator */}
                <div className="space-y-1.5">
                  <Label>Operadora atual *</Label>
                  <Controller
                    name="currentOperator"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger error={errors.currentOperator?.message}>
                          <SelectValue placeholder="Selecione sua operadora" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="amil">Amil</SelectItem>
                          <SelectItem value="sulamerica">SulAmérica</SelectItem>
                          <SelectItem value="bradesco">Bradesco Saúde</SelectItem>
                          <SelectItem value="omint">Omint</SelectItem>
                          <SelectItem value="notredame">NotreDame Intermédica</SelectItem>
                          <SelectItem value="porto">Porto Saúde</SelectItem>
                          <SelectItem value="unimed">Unimed</SelectItem>
                          <SelectItem value="hapvida">Hapvida</SelectItem>
                          <SelectItem value="outro">Outra operadora</SelectItem>
                          <SelectItem value="nenhuma">Não possuo plano atualmente</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                {/* Main pain */}
                <div className="space-y-1.5">
                  <Label>Principal dor com o plano atual *</Label>
                  <Controller
                    name="mainPain"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger error={errors.mainPain?.message}>
                          <SelectValue placeholder="Selecione sua maior dificuldade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="custo-alto">Custo muito alto</SelectItem>
                          <SelectItem value="atendimento-ruim">Atendimento ruim da operadora</SelectItem>
                          <SelectItem value="suporte-corretor">Falta de suporte do corretor</SelectItem>
                          <SelectItem value="rede-limitada">Rede hospitalar limitada</SelectItem>
                          <SelectItem value="rh-sobrecarregado">RH sobrecarregado</SelectItem>
                          <SelectItem value="colaboradores-insatisfeitos">Colaboradores insatisfeitos</SelectItem>
                          <SelectItem value="reajuste-alto">Reajuste acima do esperado</SelectItem>
                          <SelectItem value="burocratico">Processo muito burocrático</SelectItem>
                          <SelectItem value="sem-plano">Preciso contratar um plano</SelectItem>
                          <SelectItem value="outro">Outro motivo</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
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
                      Solicitar consultoria gratuita
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
                    "Consultor entra em contato em até 24h",
                    "Diagnóstico gratuito do seu plano",
                    "Apresentamos as melhores alternativas",
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
