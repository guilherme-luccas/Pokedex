import styles from "../../../styles/CardGrid.module.css";

export function CardGrid({ image, name, types }) {
  return (
    <div className={styles.container}>
      <img src={image} />
      <div>
        <h3>{name}</h3>
        <div className={styles.types}>
          {types.map((tipo) => {
            return <p>{tipo.type.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
