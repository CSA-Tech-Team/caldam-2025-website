import { BiLoader } from "react-icons/bi";

export default function Loading() {
  return (
    <div>
      <div
      className=" h-full flex items-center justify-center "
      >
        <BiLoader className=" animate-spin h-screen size-12  " />
      </div>
    </div>
  );
}
