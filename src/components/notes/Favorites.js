import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import NotesList from "../notes/NotesList";

function Favorites() {
  useFirestoreConnect([
    {
      collection: "notes",
      where: ["favorite", "==", true],
      orderBy: ["createdAt", "desc"],
      storeAs: "favnotes",
    },
  ]);
  const favnotes = useSelector((state) => state.firestore.data["favnotes"]);
  console.log(favnotes);
  const fav_array = [];
  for (let key in favnotes) {
    fav_array.push({ id: key, ...favnotes[key] });
  }

  return <NotesList notes={fav_array} />;
}

export default Favorites;
