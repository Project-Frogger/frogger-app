import MotionHoc from "./MotionHoc";


const ListAllComponent = () => {
  return (
    <h1>
      ListAll bitch
    </h1>
  )
};

const ListAll = MotionHoc(ListAllComponent);

/**************************************************************************************************/ 

const ListPublishedComponent = () => {
  return (
    <h1>
      ListPublished bitch
    </h1>
  )
};

const ListPublished = MotionHoc(ListPublishedComponent);

/**************************************************************************************************/ 

const ListDraftsComponent = () => {
  return (
    <h1>
      ListDrafts bitch
    </h1>
  )
};

const ListDrafts = MotionHoc(ListDraftsComponent);

/**************************************************************************************************/

const ListArchiveComponent = () => {
  return (
    <h1>
      ListArchive bitch
    </h1>
  )
};

const ListArchive = MotionHoc(ListArchiveComponent);

/**************************************************************************************************/

const ListBinComponent = () => {
  return (
    <h1>
      ListBin bitch
    </h1>
  )
};

const ListBin = MotionHoc(ListBinComponent);

/**************************************************************************************************/

export { ListAll, ListArchive, ListDrafts, ListPublished, ListBin };
