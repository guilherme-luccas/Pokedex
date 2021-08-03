import { useContext } from "react";
import styles from "../../../styles/CardGrid.module.css";
import { SearchContext } from "../../SearchContext";

type Props = {
  image: string;
  name: string;
  types: [{}];
};

export function CardGrid({ image, name, types }: Props) {
  const { zoomIn, ZoomIn } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      <img src={image} />
      <div>
        <h3>{name}</h3>

        <div className={styles.types}>
          {types.map((tipo, index) => {
            return <p key={index}> {tipo.type.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
