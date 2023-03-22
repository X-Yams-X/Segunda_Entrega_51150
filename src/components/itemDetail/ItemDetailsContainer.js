import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailsContainer = () => {
  const { id } = useParams();
  return (<ItemDetail id={id}></ItemDetail>);
};
