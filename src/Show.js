import { motion } from "framer-motion";

function Show({ show }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2>{show.name}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + show.backdrop_path}
        alt='shows'
      />
    </motion.div>
  );
}

export default Show;
