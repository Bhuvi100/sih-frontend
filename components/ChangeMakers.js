import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Benefits.module.css";
import FormLoader from "./FormLoader";

export default function Gallery({ changemakers }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const [img, setImg] = React.useState("");

  const handleSizeClick = (src) => {
    setSize("full");
    onOpen();
    setImg(src);
  };

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  const images = [
    {
      title: "Video 1 ertfger qtgerterttergferwtgergretertertert",
      url: "https://www.youtube.com/embed/JHu2YuadxKg?autoplay=0",
    },
    {
      title: "Video 2",
      url: "https://www.youtube.com/embed/JHu2YuadxKg?autoplay=0",
    },
    {
      title: "Video 3",
      url: "https://www.youtube.com/embed/h0b3XpiR5LE?autoplay=0",
    },
    {
      title: "Video 4",
      url: "https://www.youtube.com/embed/h0b3XpiR5LE?autoplay=0",
    },
    {
      title: "Video 5",
      url: "https://www.youtube.com/embed/h0b3XpiR5LE?autoplay=0",
    },
  ];

  if (changemakers == null) {
    return <FormLoader></FormLoader>;
  }

  return (
    <div className="max-w-screen-xl py-15 mx-auto sm:px-6 lg:px-8">
      <div>
        <div className="text-center">
          <div className="bg-hero-pattern mt-0 pt-4 font-bold mb-0 sm:text-xl text-xl bg-cover bg-center">
            <h1
              className={
                styles.mainHeading +
                " font-bold mt-6 mb-14 pb-2 sm:text-xl text-2xl md:text-3xl"
              }
            >
              Change
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Makers
              </span>
              <div className={styles.bottomLine}></div>
            </h1>
          </div>
        </div>

        <div className="">
          <marquee
            id="mq-scroll"
            behavior="scroll"
            direction="rtl"
            onMouseOver={() => {
              document.getElementById("mq-scroll").stop();
            }}
            onMouseOut={() => {
              document.getElementById("mq-scroll").start();
            }}
          >
            <div style={{ display: "flex" }}>
              {changemakers.map((src, index) => (
                <div
                  key={index}
                  bg="orange.300"
                  style={{
                    border: "1px solid #fcbc40",
                    padding: "10px",
                    marginRight: "15px",
                  }}
                >
                  <div>
                    <iframe
                      width="400"
                      height="265"
                      style={{ position: "absolute" }}
                      src={src.url}
                      allowtransparency="true"
                      title="YouTube video player"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>

                    <div
                      style={{
                        position: "relative",
                        width: "400px",
                        height: "260px",
                        background: "transparent",
                      }}
                      onClick={(e) => handleSizeClick(src)}
                    >
                      {" "}
                    </div>
                  </div>
                  <div
                    className={
                      styles.mainHeading +
                      " font-bold mt-6 mb-6 text-center pb-2 text-2xl"
                    }
                  >
                    <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 text-center to-yellow-500">
                      {src.title.slice(0, 28)}
                    </span>
                  </div>
                </div>
              ))}
              <span></span>
            </div>
          </marquee>
        </div>

        {/*<div className="grid-cols-12">*/}
        {/*  <div className={styles.fillWidth}>*/}
        {/*    <a*/}
        {/*      target="_blank"*/}
        {/*      href="/videoGallery"*/}
        {/*      className={styles.buttonLink}*/}
        {/*    >*/}
        {/*      View All{" "}*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay className={styles.mainModal} />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <h1></h1>
            <div style={{ position: "relative" }}>
              <iframe
                width="500px"
                height="315px"
                src={img.url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
              <h1
                className={
                  styles.mainHeading +
                  " font-bold mt-6 mb-14 text-center pb-2 sm:text-xl text-xl md:text-3xl"
                }
              >
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 text-center to-yellow-500">
                  {img.title}
                </span>
              </h1>
              <div
                style={{
                  position: "absolute",
                  content: "",
                  right: "-85px",
                  top: "-16px",
                }}
              >
                <Button
                  color="white"
                  style={{ background: "red", padding: "1rem", margin: "1rem" }}
                  variant="solid"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
