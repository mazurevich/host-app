import styles from "./styles.scss";

import { NewsSection } from "@/federation/federated-news/news-section";

export const News = () => {
  return (
    <div className={styles.newsPageContainer}>
      <NewsSection />;
    </div>
  );
};
