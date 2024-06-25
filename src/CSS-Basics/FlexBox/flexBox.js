import "./flexBox.css";

export default function FlexBox() {
  return (
    <>
      <div className="flex">
        <div className="flex-1">Flex1</div>
        <div className="flex-2">
          Flex2 Flex4<p>I Want SpaceX</p>
        </div>
      </div>

      <div className="flex2">
        <div className="flex-3">100px</div>
        <div className="flex-4">100px</div>
        <div className="flex-5">100px</div>
      </div>
    </>
  );
}
