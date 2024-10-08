/* eslint-disable @typescript-eslint/no-explicit-any */
import EmojiPicker from "emoji-picker-react";
import { useRef, useEffect } from "react";
const Icons = ({ setShowIcons }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowIcons(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={modalRef}
      className={`mx-0 py-2 absolute bottom-16 left-0 w-auto   rounded-md shadow  h-auto   flex-col  items-center`}
    >
      <EmojiPicker
        width={270}
        skinTonesDisabled={true}
        onEmojiClick={(value) => console.log(value)}
      />
    </div>
  );
};

export default Icons;
