import React, { useEffect, useRef, useState } from 'react';
import { FaTrophy, FaAward, FaGraduationCap, FaNewspaper, FaStar, FaCertificate, FaMedal } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { MdScience } from 'react-icons/md';

interface NewsItem {
  id: number;
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const RecentNews: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      text: "Recognized among the world's top 2% scientists by Stanford and Elsevier for pioneering contributions to AI-driven biomedical engineering.",
      icon: FaTrophy,
      color: "text-yellow-600"
    },
    {
      id: 2,
      text: "Honored as 2024 Top Scholar by ScholarGPS, ranking top 0.5% worldwide, including #51 in Image Segmentation.",
      icon: FaStar,
      color: "text-purple-600"
    },
    {
      id: 3,
      text: "Our innovative method DiffBoost was accepted in IEEE Transactions on Medical Imaging, a premier international medical imaging journal.",
      icon: MdScience,
      color: "text-red-600"
    },
    {
      id: 4,
      text: "Received Best Industry-Related Paper Award at ICPR 2024 for harmonized spatial-spectral learning in medical image segmentation.",
      icon: FaAward,
      color: "text-green-600"
    },
    {
      id: 5,
      text: "Awarded IEEE Chicago Section Junior Distinguished Research and Development Award 2024 for excellence in scientific innovation and impact.",
      icon: FaCertificate,
      color: "text-blue-600"
    },
    {
      id: 6,
      text: "Elevated to IEEE Senior Member grade, recognizing significant achievements, leadership, and professional contributions in engineering research.",
      icon: FaGraduationCap,
      color: "text-indigo-600"
    },
    {
      id: 7,
      text: "Earned IEEE Transactions on Medical Imaging Distinguished Reviewer Silver Award 2023–2024 for outstanding peer-review service contributions.",
      icon: FaMedal,
      color: "text-orange-600"
    },
    {
      id: 8,
      text: "Received Poster of Distinction Award at Digestive Disease Week 2024 for impactful biomedical engineering and AI research.",
      icon: FaNewspaper,
      color: "text-teal-600"
    },
    {
      id: 9,
      text: "Serving as Associate Editor for Frontiers in Radiation Oncology and Medical Physics Journal, strengthening editorial excellence globally.",
      icon: IoMdSchool,
      color: "text-pink-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`min-h-screen bg-gradient-to-br from-white to-white py-20 px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Recent News & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${(index + 1) * 200}ms`
              }}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center ${item.color}`}>
                  <item.icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              🎉 Celebrating Excellence in AI Research & Leadership
            </h3>
            <p className="text-lg opacity-90 mb-6">
              These achievements reflect our commitment to advancing medical AI, contributing to the global research community, and serving as a leader in the field.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
              <span className="flex items-center gap-2">
                <FaStar className="text-yellow-300" />
                Top 2% Scientist
              </span>
              <span className="flex items-center gap-2">
                <FaGraduationCap />
                IEEE Senior Member
              </span>
              <span className="flex items-center gap-2">
                <FaAward />
                Multiple Awards
              </span>
              <span className="flex items-center gap-2">
                <IoMdSchool />
                Ranked #51 Worldwide (Image Segmentation)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
