import { useState } from "react";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from './Comment.module.css';
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    onDeleteComment(content);
  };

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/morganaribeiro.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Morgana Ribeiro</strong>
              <time 
                    title="12 de Dezembro ás 08:13h" 
                    dateTime="2024-12-12 08:13:00"
              >
                  Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span> 
          </button>
        </footer>
      </div>
    </div>
  )
}