import Container from "./Container";
import vector1 from "../vector1.png";

const CountBox = ({ taskStatus, resolved }) => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-6 my-12">
        {/* In-Progress Box */}
        <div
          className="p-7 h-[200px] flex flex-col items-center justify-center text-white rounded-md relative"
          style={{
            borderRadius: "8px",
            background: `linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)`,
          }}>
          {/* Left image */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "300px",
              height: "100%",
              backgroundImage: `url(${vector1})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Right image mirrored */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "300px",
              height: "100%",
              backgroundImage: `url(${vector1})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              transform: "scaleX(-1)",
            }}
          />

          {/* Text */}
          <h2 className="font-bold text-2xl relative z-10">In Progress</h2>
          <p className="font-semibold text-3xl relative z-10">
            {taskStatus.length}
          </p>
        </div>

        {/* Resolved Box */}
        <div
          className="p-7 h-[200px] flex flex-col items-center justify-center text-white rounded-md relative"
          style={{
            borderRadius: "8px",
            background: `linear-gradient(90deg, rgba(84,207,103,1), rgba(0,130,122,1) 100%)`,
          }}>
          {/* Left image */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "300px",
              height: "100%",
              backgroundImage: `url(${vector1})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Right image mirrored */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "300px",
              height: "100%",
              backgroundImage: `url(${vector1})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              transform: "scaleX(-1)",
            }}
          />

          {/* Text */}
          <h2 className="font-bold text-2xl relative z-10">Resolved</h2>
          <p className="font-semibold text-3xl relative z-10">
            {resolved.length}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
