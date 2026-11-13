import React from 'react';
import { BarChart3, Globe, Zap, Sliders } from 'lucide-react';

const Plans = () => {
 
  const features = [
    {
      icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
      title: "Detailed Link Analytics",
      description: "Stay on top of your links' performance and get insights into the clicks you earn and people you reach.",
      image: "https://tinyurl.com/build/assets/feature-1-DBj-yszF.webp"
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      title: "Fully Branded Domains",
      description: "Customize every part of your links with branded domains — say goodbye to default link shortening!",
      image: "https://tinyurl.com/build/assets/feature-2-CK8gMGGN.webp"
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      title: "Bulk Short URLs",
      description: "Scale your communications with our API, and create thousands of unique short links in the blink of an eye.",
      image: "https://tinyurl.com/build/assets/feature-3-DxHuNqyl.webp"
    },
    {
      icon: <Sliders className="w-5 h-5 text-blue-600" />,
      title: "Link Management",
      description: "Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.",
      image: "https://tinyurl.com/build/assets/feature-4-B9Ltz0dA.webp"
    }
  ];

  return (
    
    <section className="w-full bg-gray-50 py-16 px-4">
      {/* Main Container jo full width handle karega */}
       <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>TinyURL Plans Include</h1>
       
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Flexbox Layout: Mobile pe column, Badi screen (lg) par strict Row layout */}
        <div style={{display: "grid", gridTemplateColumns: "repeat(4,1fr)",gap: "20px" ,padding:"20px"}}>
          
          {features.map((feature, index) => (
            <div 
              
              className="bg-white"
            >
              {/* Top Text Content */}
              <div className="p-6 pb-4">
                
                
                <h3 className="text-base font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 min-h-[72px]">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Image Content */}
              <div className="px-6 pb-6 mt-auto">
                <div className="overflow-hidden w-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    style={{ width: "100px", height: "150px", display:"block", objectFit: "contain" }}
                  />
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Plans;
