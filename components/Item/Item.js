import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../styles/Item.style";
import Button from "../Button/MyButton";
import Modal from "../Modal/Modal";
export default function Item({ flip, payload }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.2,
          opacity: 0,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
          },
        },
      }}
    >
      <Container border={flip ? "white" : "#171716"}>
        <div>{payload.name}</div>
        <Button
          
        >
          <div onClick={() => {
            setModalVisible(!modalVisible);
          }}>Click me</div>
        </Button>
      </Container>
      {modalVisible ? <Modal payload={payload}flip={flip} modalVisible={modalVisible} setModalVisible={setModalVisible}/> : ""}
    </motion.div>
  );
}
