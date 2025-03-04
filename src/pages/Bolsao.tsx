import React, { useState } from 'react';
import {  CheckCircle, ChevronRight, Star } from 'lucide-react';
import logo from '../imgs/vertice_branco.png';
import bgImage from '../imgs/bg.jpeg';
import emailjs from 'emailjs-com';

const Bolsao = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Replace these values with your EmailJS service, template, and user IDs
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const userId = 'YOUR_USER_ID';
      
      const templateParams = {
        name,
        email,
        phone,
        subject: 'Nova inscrição para o Bolsão Vértice 2025',
        message: `Nova inscrição para o Bolsão Vértice:\n\nNome: ${name}\nEmail: ${email}\nTelefone: ${phone}`
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      console.log('Email enviado com sucesso!', { name, email, phone });
      setSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setError('Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 flex flex-col">
      {/* Header */}
      <header className="fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between backdrop-blur-lg bg-gradient-to-r from-emerald-600/80 to-teal-600/80 rounded-b-3xl shadow-xl border-b border-white/20">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Logo Vértice"
              className="w-12 h-12 transition-transform group-hover:rotate-12 duration-300"
            />
            <span className="text-white font-bold text-xl hidden md:block">Vértice</span>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-28 pb-24 flex items-center">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <img 
            src={bgImage}
            alt="Background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 to-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left column - Content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center bg-emerald-500/20 backdrop-blur-md rounded-full px-4 py-2 mb-8 shadow-xl animate-float border border-emerald-500/30">
                <Star className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" />
                <span className="text-sm font-medium text-white">
                  Inscrições abertas | Vagas limitadas
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-white drop-shadow-lg slide-up">
                Bolsão <span className="gradient-text bg-gradient-to-r from-emerald-400 to-teal-300">Vértice</span> 2025
              </h1>
              
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl slide-up" style={{animationDelay: '0.2s'}}>
                Sua chance de conquistar uma bolsa de estudos exclusiva para 
                o preparatório mais eficiente para <span className="font-semibold text-emerald-300">concursos militares</span> e 
                <span className="font-semibold text-emerald-300"> vestibulares</span> do país.
              </p>

              <div className="space-y-4 mb-12">
                {[
                  'Material didático completo e atualizado',
                  'Acompanhamento personalizado',
                  'Aulas com professores especializados',
                  'Simulados específicos para cada exame'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 slide-up" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <p className="text-white/90">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-6 mb-8 slide-up" style={{animationDelay: '0.7s'}}>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-2 border-white bg-emerald-${500 - i * 100} flex items-center justify-center text-white font-bold`}>
                      {i < 3 ? i + 1 : `+`}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right column - Form */}
            <div className="lg:w-2/5">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative border border-emerald-100">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-400/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-pink-400/20 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  {!submitted ? (
                    <>
                      <h2 className="text-3xl font-bold mb-2 text-gray-800">Garanta sua vaga</h2>
                      <p className="text-gray-600 mb-6">Preencha o formulário para participar do processo seletivo do Bolsão Vértice 2025.</p>
                      
                      {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-center">
                          {error}
                        </div>
                      )}
                      
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                            placeholder="Digite seu nome completo"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                            placeholder="Digite seu email"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                          <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                            placeholder="(XX) XXXXX-XXXX"
                            required
                          />
                        </div>
                        
                        <button
                          type="submit"
                          disabled={loading}
                          className={`w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-xl transition transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {loading ? (
                            <span className="inline-flex items-center">
                              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Enviando...
                            </span>
                          ) : (
                            <>
                              <span>Quero participar do bolsão</span>
                              <ChevronRight className="w-5 h-5" />
                            </>
                          )}
                        </button>
                      </form>

                      <p className="text-xs text-gray-500 mt-5 text-center">
                        Ao se inscrever, você concorda com nossa Política de Privacidade.
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-emerald-600" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-gray-800">Inscrição confirmada!</h2>
                      <p className="text-gray-600 mb-6">
                        Em breve entraremos em contato com mais informações sobre o processo seletivo.
                      </p>
                      <a 
                        href="/"
                        className="text-emerald-600 font-medium hover:text-emerald-700 transition"
                      >
                        Voltar para a página inicial
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <img src={logo} alt="Vértice Preparatório Logo" className="w-auto h-10" />
            <span className="font-bold text-xl">Vértice Preparatório</span>
          </div>
          <p className="text-gray-400">© 2025 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Bolsao;