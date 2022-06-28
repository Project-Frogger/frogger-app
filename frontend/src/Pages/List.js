import MotionHoc from "./MotionHoc";
import EventTable from "../Components/EventTable";
import { useParams } from "react-router-dom";


const ListAllComponent = () => {
  const title = {
    'all': 'Все записи',
    'published': 'Опубликованные',
    'drafts': 'Черновики',
    'archive': 'Архив',
    'bin': 'Корзина',
  }
  const { id } = useParams();
  return (
    <>
      <EventTable name={title[id]} id={id}/>
    </>
  )
};

const ListAll = MotionHoc(ListAllComponent);

export default ListAll;
