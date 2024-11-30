import { Button, Col, Container, Row } from "react-bootstrap";
// import { motion } from "framer-motion";

// // Typing animation component with blinking cursor
// const TypingText = ({ text, delay = 0 }) => {
//   return (
//     <motion.span
//       initial="hidden"
//       animate="visible"
//       className="typing-container"
//       variants={{
//         visible: {
//           transition: {
//             delay,
//             staggerChildren: 0.08,
//           },
//         },
//       }}
//     >
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1 },
//           }}
//         >
//           {char}
//         </motion.span>
//       ))}
//       Blinking cursor
//       <motion.span
//         className="blinking-cursor"
//         initial={{ opacity: 1 }}
//         animate={{ opacity: [0, 1] }}
//         transition={{
//           repeat: Infinity,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//       >
//         <h1>|</h1>
//       </motion.span>
//     </motion.span>
//   );
// };

export default function Hero() {
  return (
    <Container fluid="lg" className="hero-container">
      <Row className="align-items-end">
        <Col md={{ span: 6, offset: 1 }} className="title hero-title">
          Auto Form
        </Col>

        <Col md={5} className="lead">
          <div className="px-2">A Chrome extension for easy form testing,</div>
          <div className="px-2">so you can focus on what matters.</div>
        </Col>
      </Row>
      <Row>
        <Col
          md={{ span: 8, offset: 2 }}
          className="video-container position-relative"
        >
          <div className="video-placeholder"></div>
          <h1 className="title video-overlay-text">
            {/* <TypingText text="Filler" delay={1.5} /> */}
            Filler
          </h1>
        </Col>

        <Row>
          <Col md={4}>
            <Button variant="dark" className="hero-button">
              Read More
            </Button>
            <Button variant="dark" className="hero-button">
              Demo
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
