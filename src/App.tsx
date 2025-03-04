import {
  Play,
  BookOpen,
  Target,
  Users,
  Award,
  Heart,
  MessageCircle,
  Star,
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import logo from './imgs/vertice_branco.png';
import bgImage from './imgs/bg.jpeg'; // Atualizado
import sobreImage from './imgs/sobre.jpg'; // Atualizado
import yasminImage from './imgs/472533518_17916948183046000_8454459361416418394_n.jpg.jpg'; // Atualizado
import samuelImage from './imgs/473796899_17916781782046000_8933566223774488837_n.jpg'; // Atualizado
import guilhermeImage from './imgs/474016133_17916918903046000_4004342718776490011_n.jpg'; // Atualizado
import claraImage from './imgs/474084415_17916911022046000_6032978335600401682_n.jpg'; // Atualizado
import bgvideo from './imgs/201735-916310640_small.mp4'; // Atualizado
function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 flex flex-col">
      {/* =================== HEADER =================== */}
      <header className="fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between backdrop-blur-lg bg-gradient-to-r from-emerald-600/80 to-teal-600/80 rounded-b-3xl shadow-xl border-b border-white/20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Logo Vértice"
              className="w-12 h-12 transition-transform group-hover:rotate-12 duration-300"
            />
            <span className="text-white font-bold text-xl hidden md:block">Vértice</span>
          </a>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-white/90 hover:text-white transition relative group">
              <span>Sobre</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#aprovados" className="text-white/90 hover:text-white transition relative group">
              <span>Aprovados</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/bolsao" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 font-medium animate-pulse-slow"
            >
              Bolsão 2025
            </a>
            <a href="#contato" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition shadow-xl hover:shadow-pink-500/40 font-medium">
              Fale Conosco
            </a>
          </div>
        </nav>
      </header>

      {/* =================== HERO SECTION =================== */}
      <section className="relative flex items-center min-h-screen pt-28 pb-24">
        {/* Background com a imagem */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <img
            src={bgImage} // Atualizado
            alt="Background Hero"
            className="w-full h-full object-cover scale-[1.02] animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" /> {/* Overlay escuro para melhorar a legibilidade do texto */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 shadow-xl animate-float">
                <Star className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" />
                <span className="text-sm font-medium">
                  Venha garantir sua aprovação!
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight drop-shadow-lg slide-up">
                Alcance sua <span className="gradient-text bg-gradient-to-r from-emerald-400 to-teal-300">aprovação</span> com o melhor preparatório do Brasil.
              </h1>
              <p className="text-xl text-white/90 mb-10 leading-relaxed drop-shadow-sm max-w-2xl slide-up" style={{animationDelay: '0.2s'}}>
                Domine os conteúdos essenciais e aprenda com as melhores estratégias para conquistar sua vaga nos vestibulares e concursos mais concorridos.
              </p>

              <div className="flex flex-wrap gap-5 slide-up" style={{animationDelay: '0.4s'}}>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full hover:scale-105 transition transform duration-300 shadow-2xl hover:shadow-pink-500/30 font-semibold">
                  Comece Agora Mesmo
                </button>
                <button className="glass-effect text-white px-8 py-4 rounded-full hover:bg-white/20 transition transform hover:scale-105 font-semibold border border-white/20">
                  Conheça o Método
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block lg:w-2/5 relative">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-400/20 rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
              <div className="w-full aspect-square bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-3xl border border-white/10 p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Preparação Completa</h3>
                      <p className="text-white/70 text-sm">Todo material necessário</p>
                    </div>
                  </div>
                  <div className="mt-auto text-white/90 text-right">
                    <p className="font-bold text-3xl">+500</p>
                    <p>Alunos aprovados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Onda no final da seção */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden text-white">
          <svg
            className="w-full h-16 lg:h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,138.7C840,171,960,213,1080,234.7C1200,256,1320,256,1380,256L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* =================== FEATURES SECTION =================== */}
      <section className="relative py-20 bg-white">
        <div className="absolute top-0 left-0 right-0 -z-10 text-white">
          <svg
            className="w-full h-16 lg:h-32 rotate-180"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,138.7C840,171,960,213,1080,234.7C1200,256,1320,256,1380,256L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            O que os nossos alunos irão receber{' '}
            <Heart className="inline-block text-pink-500" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
                title: 'Aulas direcionadas',
                description:
                  'Cada disciplina possui um cronograma estratégico com base nos editais de cada concurso, com foco em trazer alta performance do zero ao nível do seu vestibular.',
              },
              {
                icon: <Play className="w-8 h-8 text-emerald-500" />,
                title: 'Material & Suporte',
                description:
                  "Todos os nossos materiais foram produzidos de forma estratégica por nossos mestres, com base nos concursos anteriores e separados por assunto. Um verdadeiro Raio-X em forma de coletânea de provas anteriores.",
              },
              {
                icon: <Target className="w-8 h-8 text-emerald-500" />,
                title: 'Simulados',
                description:
                  'Todos os simulados estão na régua dos concursos em que o Vértice prepara. Um ecossistema capaz de potencializar o aprendizado e performance dos nossos alunos',
              },
              {
                icon: <Award className="w-8 h-8 text-emerald-500" />,
                title: 'Missão Medicina',
                description:
                  'No vértice, o aluno que almeja um dos cursos mais concorridos do brasil, recebe uma preparação com base na matriz de referências do ENEM, ou seja, receberão orientações para vencer a TRI do ENEM.',
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-emerald-500" />,
                title: 'Acompanhamento',
                description:
                  'Encontros semanais ao vivo tirar dúvidas, além de estratégias para ganhar tempo nas resoluções',
              },
              {
                icon: <Users className="w-8 h-8 text-emerald-500" />,
                title: 'Alguém que sonha com você',
                description:
                  'Um professor que conhece seu sonho junto com você, até que conquiste sua vaga na universidade',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-100 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 animate-ping" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== SUCCESS STORIES WITH VIDEO BG =================== */}
      <section className="aprovados relative py-20 overflow-hidden">
        <video
          src={bgvideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-[#0D9488]/60 -z-10"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Nossos Aprovados<span className="text-emerald-300">.</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Conheça alguns dos nossos alunos que conquistaram sua vaga
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {[
              {
                name: 'Yasmin de Lima',
                image: yasminImage, // Atualizado
              },
              {
                name: 'Samuel Mendonça',
                image: samuelImage, // Atualizado
              },
              {
                name: 'Guilherme Oliveira',
                image: guilhermeImage, // Atualizado
              },
              {
                name: 'Clara Menezes',
                image: claraImage, // Atualizado
              },
            ].map((student, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition group">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-96 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =================== ABOUT SECTION =================== */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
            Sobre a <span className="text-green-600">Vértice Preparatório</span>
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white shadow-2xl rounded-xl overflow-hidden">
            <div className="relative h-full">
              <img src={sobreImage} alt="Estudantes no Vértice Preparatório" className="w-full h-full object-cover" /> {/* Atualizado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold">Transformando Sonhos em Conquistas</h3>
                <p className="text-lg mt-2">Preparação de excelência para concursos e vestibulares.</p>
              </div>
            </div>
            <div className="p-8">
              <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                No <span className="font-semibold text-green-600">Vértice Preparatório</span>, nossa missão é transformar sonhos em conquistas.
                Especializados na preparação para <span className="font-medium">concursos militares</span> e <span className="font-medium">vestibulares</span>,
                oferecemos uma abordagem educacional que combina tradição e inovação.
              </p>
              <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                Confiamos tanto na qualidade de nossa preparação que proporcionamos aos novos alunos
                <span className="font-semibold text-green-600"> 15 dias gratuitos</span> para experimentar nossos métodos. Você poderá acessar
                nossos materiais, interagir com nossa equipe e vivenciar a excelência do ensino.
              </p>
              <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                Nossa equipe de <span className="font-semibold">professores qualificados</span> conhece a fundo os conteúdos exigidos
                nos concursos e utiliza <span className="font-medium">técnicas de ensino inovadoras</span> para maximizar o aprendizado.
              </p>
             
              <p className="text-center font-bold text-gray-900 text-xl mt-8">
                No Vértice Preparatório, <span className="text-green-600">seu objetivo é o nosso compromisso</span>.
              </p>
              <div className="mt-10 text-center">
                <a href="#inscricao" className="inline-block bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Inscreva-se Agora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== CTA SECTION =================== */}
      <section className="relative py-20 mt-24 bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] 
                     bg-cover bg-center mix-blend-overlay opacity-20"
        />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-lg">
            Fera! Conta comigo <Heart className="inline-block text-pink-300" />
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
          Ambiente com ecossistema ideal para a preparação de alta performance para carreiras militares e vestibulares. {' '}
            <span className="font-bold">😎</span>
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-gray-50 transition transform hover:scale-105 shadow-xl font-bold">
            Quero garantir minha aprovação
          </button>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src={logo} // Atualizado
                  alt="Vértice Preparatório Logo"
                  className="w-auto h-12" // Adjust height as needed
                />
              </div>
              <p className="text-gray-400 mb-2">© 2025 - Vértice Preparatório</p>
              <p className="text-gray-400">Todos Direitos Reservados.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Conteúdo</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Aprovados
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Sobre
                  </a>
                </li>
               
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Comunidade</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.whatsapp.com/channel/YOUR_WHATSAPP_LINK" // Replace with your WhatsApp link
                    className="text-gray-400 hover:text-white transition"
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Important for security
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@verticepreparatorio" // Replace with your YouTube link
                    className="text-gray-400 hover:text-white transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/verticepreparatorio" // Replace with your Instagram link
                    className="text-gray-400 hover:text-white transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
               
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-6">
                Receba notícias e atualizações em seu email
              </p>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="bg-emerald-500 text-white px-4 py-3 rounded-lg hover:bg-emerald-600 transition">
                  Assinar Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;