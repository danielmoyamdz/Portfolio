import { useTranslation } from 'react-i18next';
import { FaLinkedin } from 'react-icons/fa';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Alvaro J. Hurtado Villegas",
      position: t('testimonials.alvaro.position'),
      company: "Factorial.io",
      content: t('testimonials.alvaro.content'),
      linkedin: "https://www.linkedin.com/in/alvar0hurtad0/",
      email: "alvaro.hurtado.villegas@gmail.com"
    },
    {
      name: "Natalia Alves",
      position: t('testimonials.natalia.position'),
      company: "Factorial.io",
      content: t('testimonials.natalia.content'),
      linkedin: "https://www.linkedin.com/in/natalia-alves-1b1b1b1b1/"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-heading-light dark:text-heading-dark">
        {t('testimonials.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl relative overflow-hidden transition-transform duration-300 hover:scale-[1.025]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-heading-light dark:text-heading-dark text-sm font-medium">{testimonial.position}</p>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm">{testimonial.company}</p>
                </div>
                {testimonial.linkedin && (
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors ml-2"
                  >
                    <FaLinkedin size={22} />
                  </a>
                )}
              </div>
              <div className="prose prose-invert max-w-none mb-2">
                {testimonial.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-text-light dark:text-text-dark mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>
              {testimonial.email && (
                <div className="mt-2 text-xs text-subtext-light dark:text-subtext-dark">
                  {t('testimonials.contact')}: <a href={`mailto:${testimonial.email}`} className="text-primary hover:text-secondary transition-colors">{testimonial.email}</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 