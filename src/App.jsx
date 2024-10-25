import React from "react";
import { motion } from "framer-motion";
import "./index.css"; // Ensure Tailwind CSS is imported here

const App = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/89/f1/ef/89f1eff452400efb88773462ec6a0107.jpg')",
      }}
    >
      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4 px-4">
        {/* Logo Image with Animation */}
        <motion.img
          src="https://i.pinimg.com/736x/10/2f/aa/102faa85bd243e31d6d3f6cb10463273.jpg"
          alt="وايت مويه بأعلي جوده جنوب ووسط"
          className="w-24 h-24 rounded-full"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Title with Animation */}
        <motion.h1
          className="text-white text-3xl md:text-4xl font-bold mt-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          وايت مويه بأعلى جوده جنوب ووسط جده
        </motion.h1>

        {/* Description with Animation */}
        <motion.p
          className="text-white text-lg md:text-xl leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        >
          ما في أحسن من مياه صافية ووايت مويه يوصل لعندك وين ما كنت، وسط أو جنوب
          جده. <br /> فريقنا دايمًا جاهز يلبي احتياجاتك ويوصلك المياه بأسرع وقت
          وأحسن جودة، مع لمسات احترافية تريح بالك.
          <br />
          تقدر تعتمد علينا في توفير صهاريج ووايتات بأحجام تناسب طلبك، وبأسعار
          تنافسية ما تلقاها في مكان ثاني. <br /> سواء تحتاج مياه للبيت، المزرعة،
          أو حتى الموقع، احنا هنا ونوصلك وين ما كنت، ودوم بأعلى مستوى خدمة لأن
          راحتك تهمنا.
          <br />
          اتصل علي: 0533411942
        </motion.p>

        {/* Call Button with Animated Gradient */}
        <motion.a
          href="tel:0533411942"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-xl px-6 py-3 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
          style={{
            backgroundSize: "200%",
            animation: "gradientAnimation 3s infinite linear",
          }}
        >
          اطلب الآن
        </motion.a>
      </div>

      {/* Footer with Gradient Animation */}
      <footer className="absolute bottom-0 z-10 mt-12 mb-4">
        <motion.p
          className="text-white text-center text-lg md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          تمت بواسطة{" "}
          <motion.a
            href="https://wa.me/+201011245872?text=Hello%20Abdullah!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r font-bold from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent hover:underline"
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            style={{
              backgroundSize: "200%",
              backgroundPosition: "0% 0%",
              animation: "gradientAnimation 5s infinite",
            }}
          >
            الأخ عبدالله
          </motion.a>
        </motion.p>
      </footer>

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
    </div>
  );
};

export default App;
