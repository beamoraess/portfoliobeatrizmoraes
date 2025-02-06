import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <motion.div className="relative group w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
    <motion.img
      src="/images/profile-img.jpg"
      alt="Minha Foto"
      className="w-full h-full object-cover rounded-lg"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 0.7 }}
      whileHover={{ opacity: 1 }}
    />
  
    {/* Moldura */}
    <motion.div
      className="absolute w-full h-full border-2 border-accent rounded-lg top-2 left-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
    />
  </motion.div>
  );
}
