"use client";
import { useState } from "react";
import styles from "./header.module.css";
import { Modal } from "antd";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState("movie");

  const handleModal = (name: string) => {
    setType(name);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.header}>
      <a href="/" className={styles.headerLogo}>
        MOVIECRITIC
      </a>
      <div>
        <button
          type="button"
          className={`${styles.btn} ${styles.outline}`}
          onClick={() => handleModal("movie")}
        >
          Add new movies
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => handleModal("review")}
        >
          Add new review
        </button>
      </div>
      <Modal
        title={`Add new ${type}`}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
        okText={type === "movies" ? "Create movie" : "Add review"}
      ></Modal>
    </div>
  );
}
