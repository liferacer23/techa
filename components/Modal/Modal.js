import { OverLay } from "../styles/Modal.style";
import { motion } from "framer-motion";
import { Modal } from "../styles/Modal.style";
export default function ModalF({ modalVisible, setModalVisible, flip }) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <OverLay
      onClick={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
      >
        <Modal
          onClick={(e) => e.stopPropagation()}
          bg={flip ? "#171716" : "white"}
          color={flip ? "white" : "#171716"}
        >
          <div>
            sal;,dla
            <div
              onClick={() => {
                setModalVisible(!modalVisible);
              }}
            >
              xx
            </div>
          </div>
        </Modal>
      </motion.div>
    </OverLay>
  );
}
