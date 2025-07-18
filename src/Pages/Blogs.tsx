import React from "react";
import { LiaCalendar } from "react-icons/lia";
import "../Styles/style.css"
import "../Styles/global.css"
import cursorImage from '../assets/cursor.png';
import { AIRadation, ColonSegNet, DoubleUNet, Expandability, MachineLearningbasedclassification, ResUnet, Transformermodel } from "../Services/Blogs";

const Blogs:React.FC=()=>{
  return(
    <section className="p-5 h-screen pt-[82px]">
      <h1 className="text-center text-4xl font-semibold cursor-pointer hover:text-emerald-500 ">Next-Gen AI Blogs</h1>
      <div className="mt-5 max-h-[800px] w-full overflow-auto grid grid-cols-1 xl:grid-cols-2 gap-10 p-5 custom-cursor">
        {/**First Grid Box */}
        <div className="border-[0.5px] h-80 lg:h-60 xl:h-75 w-full rounded-4xl p-2 text-xl group/content hover:shadow-md hover:shadow-emerald-400 hover:border-emerald-400 duration-300" style={{ cursor: `url(${cursorImage}) 16 16, auto` }}>
          <div className="mt-2 ml-2 flex items-center gap-2 shadow-emerald-300 shadow-sm hover:shadow-md text-black rounded-2xl px-3 py-1 flex-shrink-0 w-max cursor-progress group/date">
            <LiaCalendar className="group-hover/date:text-emerald-600"/>
            <h1>February 6, 2023</h1>
          </div>
          <h1 className="mt-3 ml-2 font-bold text-center text-lg group-hover/content:text-emerald-600 cursor-pointer white-text-shadow group-hover/content:underline group-hover/content:underline-offset-auto">ColonSegNet for Real-time Polyp Segmentation</h1>
          <div className="mt-4 overflow-hidden break-words text-sm sm:text-base leading-relaxed">
            <p className="text-justify">Introduction ColonSegNet is a popular lightweight polyp segmentation architecture that has been utilized at an industrial application by NVIDIA for the Clara Holoscan 
              Sample App for colonoscopy polyps’ segmentation. With an image size of 512*512, ColonSegNet achieves a dice coefficient of 82.06% for the polyp segmentation tasks and 
              achieves average precision of 80.00% for the polyp detection tasks <span className="text-emerald-400 cursor-pointer hover:text-emerald-600 hover:underline hover:underline-offset-auto" onClick={ColonSegNet}>Readmore...</span></p>
          </div>
        </div>


        {/**Second one */}

        <div className="border-[0.5px] h-80 lg:h-60 xl:h-75 w-full rounded-4xl p-2 text-xl group/content hover:shadow-md hover:shadow-emerald-400 hover:border-emerald-400 duration-300" style={{ cursor: `url(${cursorImage}) 16 16, auto` }}>
          <div className="mt-2 ml-2 flex items-center gap-2 shadow-emerald-300 shadow-sm hover:shadow-md text-black rounded-2xl px-3 py-1 flex-shrink-0 w-max cursor-progress group/date">
            <LiaCalendar className="group-hover/date:text-emerald-600"/>
            <h1>February 3, 2023</h1>
          </div>
          <h1 className="mt-3 ml-2 font-bold text-center text-lg group-hover/content:text-emerald-600 cursor-pointer white-text-shadow group-hover/content:underline group-hover/content:underline-offset-auto">DoubleUNet for Medical image Segmentation</h1>
          <div className="mt-4 overflow-hidden break-words text-sm sm:text-base leading-relaxed">
            <p className="text-justify">Semantic image segmentation is the process of labeling each pixel of an image with its 
              corresponding class. An encoder-decoder based approach, like U-Net and its variants, is a 
              popular strategy for solving medical image segmentation tasks. To improve the performance of 
              U-Net on various segmentation tasks, we propose a novel architecture called DoubleU-Net, 
              Architecture DoubleUNet <span className="text-emerald-400 cursor-pointer hover:text-emerald-600 hover:underline hover:underline-offset-auto" onClick={DoubleUNet}>Readmore...</span></p>
          </div>
        </div>


        <div className="border-[0.5px] h-80 lg:h-60 xl:h-75 w-full rounded-4xl p-2 text-xl group/content hover:shadow-md hover:shadow-emerald-400 hover:border-emerald-400 duration-300" style={{ cursor: `url(${cursorImage}) 16 16, auto` }}>
          <div className="mt-2 ml-2 flex items-center gap-2 shadow-emerald-300 shadow-sm hover:shadow-md text-black rounded-2xl px-3 py-1 flex-shrink-0 w-max cursor-progress group/date">
            <LiaCalendar className="group-hover/date:text-emerald-600"/>
            <h1>January 24, 2023</h1>
          </div>
          <h1 className="mt-3 ml-2 font-bold text-center text-lg group-hover/content:text-emerald-600 cursor-pointer white-text-shadow group-hover/content:underline group-hover/content:underline-offset-auto">Explainablity of deep learning models</h1>
          <div className="mt-4 overflow-hidden break-words text-sm sm:text-base leading-relaxed">
            <p className="text-justify">Deep learning models, such as neural networks, have become increasingly popular in recent years 
              due to their ability to learn and make predictions from large amounts of data. However, one of 
              the major challenges with these models is that they can be difficult to understand and interpret.
              This is known as the “black box” problem {""}
              <span className="text-emerald-400 cursor-pointer hover:text-emerald-600 hover:underline hover:underline-offset-auto" onClick={Expandability}>Readmore...</span></p>
          </div>
        </div>



        <div className="border-[0.5px] h-80 lg:h-60 xl:h-75 w-full rounded-4xl p-2 text-xl group/content hover:shadow-md hover:shadow-emerald-400 hover:border-emerald-400 duration-300" style={{ cursor: `url(${cursorImage}) 16 16, auto` }}>
          <div className="mt-2 ml-2 flex items-center gap-2 shadow-emerald-300 shadow-sm hover:shadow-md text-black rounded-2xl px-3 py-1 flex-shrink-0 w-max cursor-progress group/date">
            <LiaCalendar className="group-hover/date:text-emerald-600"/>
            <h1>January 24, 2023</h1>
          </div>
          <h1 className="mt-3 ml-2 font-bold text-center text-lg group-hover/content:text-emerald-600 cursor-pointer white-text-shadow group-hover/content:underline group-hover/content:underline-offset-auto">Artificial Intelligence in Radiation Therapy for Cancer Treatment</h1>
          <div className="mt-4 overflow-hidden break-words text-sm sm:text-base leading-relaxed">
            <p className="text-justify">Radiation therapy (also known as Radiotherapy) is a procedure of cancer treatment that uses high-energy radiation
              to kill cancer cells. Artificial Intelligence (AI) is revolutionizing the field of cancer treatment, including the 
              use of radiation therapy. Radiation therapy is a common treatment option for cancer that uses high-energy rays to 
              target and kill cancer cells. <span className="text-emerald-400 cursor-pointer hover:text-emerald-600 hover:underline hover:underline-offset-auto" onClick={AIRadation}> Readmore...</span></p>
          </div>
        </div>


        <div className="border-[0.5px] h-80 lg:h-60 xl:h-75 w-full rounded-4xl p-2 text-xl group/content hover:shadow-md hover:shadow-emerald-400 hover:border-emerald-400 duration-300" style={{ cursor: `url(${cursorImage}) 16 16, auto` }}>
          <div className="mt-2 ml-2 flex items-center gap-2 shadow-emerald-300 shadow-sm hover:shadow-md text-black rounded-2xl px-3 py-1 flex-shrink-0 w-max cursor-progress group/date">
            <LiaCalendar className="group-hover/date:text-emerald-600"/>
            <h1>January 20, 2023</h1>
          </div>
          <h1 className="mt-3 ml-2 font-bold text-center text-lg group-hover/content:text-emerald-600 cursor-pointer white-text-shadow group-hover/content:underline group-hover/content:underline-offset-auto">Introduction to Transformer Model</h1>
          <div className="mt-4 overflow-hidden break-words text-sm sm:text-base leading-relaxed">
            <p className="text-justify">Recently, there has been a significant shift in the field of natural language processing (NLP),
               towards the use of transformers. Some examples of specific NLP tasks that Transformers have been used for 
               include Language Translation, Text Generation, Text Summarization, Sentiment Analysis, Dialogue Generation
               and language modelling.  Transformers, which were first introduced in a 2017{" "}
               <span className="text-emerald-400 cursor-pointer hover:text-emerald-600 hover:underline hover:underline-offset-auto" onClick={Transformermodel}>Readmore...</span></p>
          </div>
        </div>


        <div className="border-[0.5px] h-80 lg:h-60 xl:h-75 w-full rounded-4xl p-2 text-xl group/content hover:shadow-md hover:shadow-emerald-400 hover:border-emerald-400 duration-300" style={{ cursor: `url(${cursorImage}) 16 16, auto` }}>
          <div className="mt-2 ml-2 flex items-center gap-2 shadow-emerald-300 shadow-sm hover:shadow-md text-black rounded-2xl px-3 py-1 flex-shrink-0 w-max cursor-progress group/date">
            <LiaCalendar className="group-hover/date:text-emerald-600"/>
            <h1>January 20, 2023</h1>
          </div>
          <h1 className="mt-3 ml-2 font-bold text-center text-lg group-hover/content:text-emerald-600 cursor-pointer white-text-shadow group-hover/content:underline group-hover/content:underline-offset-auto">Machine Learning-based Classification, Detection, and Segmentation of Medical Images (PhD Thesis summary)</h1>
          <div className="mt-4 overflow-hidden break-words text-sm sm:text-base leading-relaxed">
            <p className="text-justify">Gastrointestinal (GI) cancers are among the most common cancers worldwide. In particular, 
              colorectal cancer is the most lethal in terms of the number of incidences and mortality 
              (third most common cause of cancer and the second most common cause of cancer-related deaths).
               Colonoscopy is the gold standard for screening patients for colorectal cancer. During the {" "}
               <span className="text-emerald-400 cursor-pointer hover:text-emerald-600 hover:underline hover:underline-offset-auto" onClick={MachineLearningbasedclassification}>Readmore...</span></p>
          </div>
        </div>


        <div className="border-[0.5px] h-80 lg:h-60 xl:h-75 w-full rounded-4xl p-2 text-xl group/content hover:shadow-md hover:shadow-emerald-400 hover:border-emerald-400 duration-300" style={{ cursor: `url(${cursorImage}) 16 16, auto` }}>
          <div className="mt-2 ml-2 flex items-center gap-2 shadow-emerald-300 shadow-sm hover:shadow-md text-black rounded-2xl px-3 py-1 flex-shrink-0 w-max cursor-progress group/date">
            <LiaCalendar className="group-hover/date:text-emerald-600"/>
            <h1>January 20, 2023</h1>
          </div>
          <h1 className="mt-3 ml-2 font-bold text-center text-lg group-hover/content:text-emerald-600 cursor-pointer white-text-shadow group-hover/content:underline group-hover/content:underline-offset-auto">ResUNet++</h1>
          <div className="mt-4 overflow-hidden break-words text-sm sm:text-base leading-relaxed">
            <p className="text-justify"> ResUNet++ is built upon the Deep Residual U-Net (ResUNet) and UNet. However, ResUNet++ goes further, 
              embedding: Residual Blocks: Ensuring information propagation across layers. Squeeze and Excitation Blocks: 
              Recalibrating feature responses for better representation. ASPP (Atrous Spatial Pyramidal Pooling): Enlarging filter’s 
              field-of-view to capture broader contexts. Attention Blocks: Enhancing the relevance of feature maps in{" "} 
               <span className="text-emerald-400 cursor-pointer hover:text-emerald-600 hover:underline hover:underline-offset-auto" onClick={ResUnet}>Readmore...</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blogs;