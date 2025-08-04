import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Smartphone, Home, MapPin } from 'lucide-react'; // Ícones para um look mais profissional

const EvaluationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telemovel: '',
    tipoImovel: '',
    localizacao: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.telemovel || !formData.tipoImovel || !formData.localizacao) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor preencha todos os campos para prosseguir.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Pedido enviado com sucesso!",
      description: "Receberá a sua avaliação gratuita em menos de 24 horas.",
    });
    setFormData({ nome: '', email: '', telemovel: '', tipoImovel: '', localizacao: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  // Estilo ajustado para os inputs funcionarem bem dentro do novo card
  const inputContainerClass = "relative";
  const inputClass = "bg-white/10 border-white/20 text-white placeholder:text-white/60 pl-10";
  const iconClass = "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="nome" className="sr-only">Nome Completo</Label>
        <div className={inputContainerClass}>
            <User className={iconClass} />
            <Input id="nome" type="text" placeholder="O seu nome completo" value={formData.nome} onChange={(e) => handleInputChange('nome', e.target.value)} className={inputClass} required />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="email" className="sr-only">Email</Label>
         <div className={inputContainerClass}>
            <Mail className={iconClass} />
            <Input id="email" type="email" placeholder="seuemail@exemplo.com" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className={inputClass} required />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="telemovel" className="sr-only">Telemóvel</Label>
         <div className={inputContainerClass}>
            <Smartphone className={iconClass} />
            <Input id="telemovel" type="tel" placeholder="+351 9xx xxx xxx" value={formData.telemovel} onChange={(e) => handleInputChange('telemovel', e.target.value)} className={inputClass} required />
        </div>
      </div>

       <div className="space-y-1">
        <Label htmlFor="tipoImovel" className="sr-only">Tipo de Imóvel</Label>
         <div className={inputContainerClass}>
            <Home className={iconClass} />
            <Select onValueChange={(value) => handleInputChange('tipoImovel', value)} required>
              <SelectTrigger className={inputClass}>
                <SelectValue placeholder="Selecione o tipo de imóvel" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-white/30 text-white">
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="moradia">Moradia</SelectItem>
                <SelectItem value="terreno">Terreno</SelectItem>
                <SelectItem value="predio">Prédio</SelectItem>
                <SelectItem value="comercio">Comércio</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="localizacao" className="sr-only">Localização</Label>
        <div className={inputContainerClass}>
            <MapPin className={iconClass} />
            <Input id="localizacao" type="text" placeholder="Cidade, distrito ou código postal" value={formData.localizacao} onChange={(e) => handleInputChange('localizacao', e.target.value)} className={inputClass} required />
        </div>
      </div>

      {/* ============================================== */}
      {/* CORREÇÃO ÚNICA E DEFINITIVA DO BOTÃO AQUI      */}
      {/* ============================================== */}
      <Button type="submit" variant="cta" size="lg" className="w-full !mt-6 text-sm font-bold tracking-wider sm:text-base">
        QUERO UMA AVALIAÇÃO GRATUITA
      </Button>
    </form>
  );
};

export default EvaluationForm;