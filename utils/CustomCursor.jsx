import Image from "next/image";
import cursor from "../public/cursor1.svg";

const CustomCursor = ({ name, classDiv, classCursor, classForName }) => {
  return (
    <div className={classDiv}>
      <Image src={cursor} className={classCursor} />
      <span className={classForName}>{name}</span>
    </div>
  );
};

export default CustomCursor;
