import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/morganaribeiro.png" />
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
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom devon, parabéns!👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span> 
          </button>
        </footer>
      </div>
    </div>
  )
}