import { API_URL } from "../app/constants";
import styles from "../styles/movie-credit.module.css";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredit({ id }: { id: string }) {
  const credits = await getCredits(id);

  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div className={styles.credit} key={credit.id}>
          <div className={styles.img}>
            <img src={credit.profile_path} alt={credit.name} />
          </div>
          <p>{credit.name}</p>
        </div>
      ))}
    </div>
  );
}
