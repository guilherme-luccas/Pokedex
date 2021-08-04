import { useContext } from "react";
import styles from "../../../styles/CardGrid.module.css";
import { SearchContext } from "../../SearchContext";
import Image from "next/image";

type Props = {
  image: any;
  name: string;
  types: any;
};

export function CardGrid({ image, name, types }: Props) {
  const { zoomIn, ZoomIn } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      <Image src={image} />
      <div>
        <h3>{name}</h3>

        <div className={styles.types}>
          {types.map((tipo: any, index) => {
            return <p key={index}> {tipo.type.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
