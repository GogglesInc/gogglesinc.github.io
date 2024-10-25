import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function TransitionScreen(props) {
  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
      exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
      style={{ originX: props.present ? 0 : 1 }}
      className="fixed inset-0 z-[99] bg-accent"
    />
  );
}

TransitionScreen.propTypes = {
  present: PropTypes.bool,
};
