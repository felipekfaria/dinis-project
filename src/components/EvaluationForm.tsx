import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Phone, Home, MapPin } from 'lucide-react';

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
    
    // Basic validation
    if (!formData.nome || !formData.email || !formData.telemovel || !formData.tipoImovel || !formData.localizacao) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor preencha todos os campos para prosseguir.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Pedido enviado com sucesso!",
      description: "Receberá a sua avaliação gratuita em menos de 24 horas.",
    });

    // Reset form
    setFormData({
      nome: '',
      email: '',
      telemovel: '',
      tipoImovel: '',
      localizacao: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          Avaliação Gratuita
        </h3>
        <p className="text-white/80 text-sm">
          Preencha os dados abaixo e receba a sua avaliação em 24h
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="nome" className="text-white font-medium flex items-center gap-2">
            <User className="w-4 h-4" />
            Nome Completo
          </Label>
          <Input
            id="nome"
            type="text"
            placeholder="O seu nome completo"
            value={formData.nome}
            onChange={(e) => handleInputChange('nome', e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-12"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white font-medium flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-12"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="telemovel" className="text-white font-medium flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Telemóvel
          </Label>
          <Input
            id="telemovel"
            type="tel"
            placeholder="+351 9xx xxx xxx"
            value={formData.telemovel}
            onChange={(e) => handleInputChange('telemovel', e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-12"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tipoImovel" className="text-white font-medium flex items-center gap-2">
            <Home className="w-4 h-4" />
            Tipo de Imóvel
          </Label>
          <Select onValueChange={(value) => handleInputChange('tipoImovel', value)} required>
            <SelectTrigger className="bg-white/10 border-white/20 text-white focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-12">
              <SelectValue placeholder="Selecione o tipo de imóvel" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="apartamento">Apartamento</SelectItem>
              <SelectItem value="moradia">Moradia</SelectItem>
              <SelectItem value="terreno">Terreno</SelectItem>
              <SelectItem value="predio">Prédio</SelectItem>
              <SelectItem value="comercio">Comércio</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="localizacao" className="text-white font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Localização
          </Label>
          <Input
            id="localizacao"
            type="text"
            placeholder="Cidade, distrito ou código postal"
            value={formData.localizacao}
            onChange={(e) => handleInputChange('localizacao', e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-12"
            required
          />
        </div>

        <Button type="submit" variant="cta" className="w-full mt-6 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
          QUERO UMA AVALIAÇÃO 100% GRATUITA
        </Button>
      </form>
    </div>
  );
};

export default EvaluationForm;