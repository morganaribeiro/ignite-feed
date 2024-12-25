import { format , formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
      locale: ptBR
    });
    const [newCommentText, setNewCommentText] = useState("");

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText("");
    };

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    };

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        // imutabilidade => as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(item => {
                    if(item.type === "paragraph"){
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === "link"){
                        return <p key={item.content}>👉 {' '}<a href="#">{item.content}</a></p>
                    }
                })}
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe seu comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    );
}