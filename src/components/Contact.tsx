import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Download, Linkedin, Github, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation de l'envoi
    setTimeout(() => {
      alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adam.hocini.ah@icloud.com",
      link: "mailto:adam.hocini.ah@icloud.com"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Reventin-Vaugris / Lyon, France",
      link: null
    },
    {
      icon: Calendar,
      label: "Disponibilité",
      value: "Alternance, Freelance, Missions",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "#",
      color: "hover:text-gray-400"
    },
    {
      icon: Download,
      label: "CV PDF",
      link: "#",
      color: "hover:text-[#00C897]"
    }
  ];

  const subjects = [
    "Demande d'alternance",
    "Mission freelance",
    "Projet Power Platform",
    "Développement web",
    "Autre"
  ];

  return (
    <section id="contact" className="py-20 bg-[#1A151F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F5F5F5] mb-4">Contactez-moi</h2>
          <div className="w-24 h-1 bg-[#00C897] mx-auto mb-8"></div>
          <p className="text-lg text-[#F5F5F5]/80 max-w-3xl mx-auto">
            Prêt à donner vie à vos projets ? Discutons de vos besoins en Power Platform ou développement web.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#00C897] mb-6">Restons en contact</h3>
              <p className="text-[#F5F5F5]/80 mb-8 leading-relaxed">
                Que vous ayez un projet spécifique en tête, des questions sur mes compétences, 
                ou souhaitiez simplement échanger sur les technologies Power Platform et JavaScript, 
                n'hésitez pas à me contacter !
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-[#2A2A2A] rounded-lg hover:bg-[#2A2A2A]/80 transition-colors duration-300">
                      <div className="bg-[#00C897]/20 p-3 rounded-lg">
                        <IconComponent className="text-[#00C897]" size={24} />
                      </div>
                      <div>
                        <p className="text-[#00C897] font-medium text-sm">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-[#F5F5F5] hover:text-[#00C897] transition-colors duration-200">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-[#F5F5F5]">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Liens sociaux */}
            <div>
              <h4 className="text-lg font-semibold text-[#F5F5F5] mb-4">Mes profils</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className={`bg-[#2A2A2A] p-3 rounded-lg text-[#F5F5F5] ${social.color} transition-all duration-300 hover:scale-110`}
                      title={social.label}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-r from-[#00C897]/20 to-[#00A082]/20 rounded-lg p-6 border border-[#00C897]/30">
              <h4 className="text-[#00C897] font-semibold mb-3">Actuellement disponible pour :</h4>
              <ul className="space-y-2 text-[#F5F5F5]/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00C897] rounded-full mr-3"></span>
                  Alternance en développement Power Platform
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00C897] rounded-full mr-3"></span>
                  Missions freelance courte/moyenne durée
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00C897] rounded-full mr-3"></span>
                  Projets JavaScript / React
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-[#2A2A2A] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[#F5F5F5] font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A151F] border border-[#3A3A3A] text-[#F5F5F5] rounded-lg focus:outline-none focus:border-[#00C897] transition-colors duration-200"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#F5F5F5] font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A151F] border border-[#3A3A3A] text-[#F5F5F5] rounded-lg focus:outline-none focus:border-[#00C897] transition-colors duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#F5F5F5] font-medium mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A151F] border border-[#3A3A3A] text-[#F5F5F5] rounded-lg focus:outline-none focus:border-[#00C897] transition-colors duration-200"
                >
                  <option value="">Sélectionnez un sujet</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#F5F5F5] font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1A151F] border border-[#3A3A3A] text-[#F5F5F5] rounded-lg focus:outline-none focus:border-[#00C897] transition-colors duration-200 resize-vertical"
                  placeholder="Décrivez votre projet ou vos besoins..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00C897] hover:bg-[#00A082] disabled:bg-[#00C897]/50 text-[#1A151F] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1A151F]"></div>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-[#3A3A3A]">
              <p className="text-[#F5F5F5]/60 text-sm text-center">
                Je réponds généralement sous 24h. Pour les urgences, contactez-moi directement par email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;