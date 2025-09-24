// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import styles from "./footer.module.css";
export const Footer = ({len}) => {
    const taches = len > 1 ? "tâches" : "tâche";
  return (
    <footer>
      <code className={styles.footer}>
        Le gestionnaire de tâches vous as permis de traiter {len} {taches} depuis le
        début de son utilisation.
      </code>
    </footer>
  );
};
