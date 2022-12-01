import React from "react";
import RoomType from "../../Components/Room/RoomType";

const Room = () => {
  const StayPrice = [
    {
      id: 1,
      option: "Lowest price",
    },
    {
      id: 2,
      option: "Highest price",
    },
  ];

  const RoomSize = [
    {
      id: 1,
      option: "Larger Room",
    },
    {
      id: 2,
      option: "smallest room",
    },
  ];

  const HotelBranch = [
    {
      id: 1,
      option: "All branch",
    },
    {
      id: 2,
      option: "Hotel new work",
    },
    {
      id: 3,
      option: "Hotel rome",
    },
    {
      id: 4,
      option: "Hotel london",
    },
  ];
  const HotelBed = [
    {
      id: 1,
      option: "1",
    },
    {
      id: 2,
      option: "2",
    },
    {
      id: 3,
      option: "3",
    },
  ];

  return (
    <div className="roomWrapper ">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(65,179,160,1) 0%, rgba(20,148,119,1) 22%, rgba(59,170,179,1) 62%)",
        }}
        className=" w-full h-[300px] pt-10 flex justify-center items-center"
      >
        <h1 className=" text-6xl font-normal font-serif">Search</h1>
      </div>
      <div className="flex justify-center items-center h-20 bg-[#212529] mb-10">
        <div>
          <RoomType Option={StayPrice} title="Stay price" />
        </div>
        <div>
          <RoomType Option={RoomSize} title="Room size" />
        </div>
      </div>

      <div className="row pb-5 container m-auto">
        <div className="col-12 col-md-3 ">
          <div className=" bg-[#212529] flex justify-center items-center p-3 flex-col">
            <RoomType
              Option={HotelBranch}
              title="Hotel Branch"
              Style={{ width: "200px" }}
            />
            <RoomType
              Option={HotelBed}
              title="Bed Quentity"
              Style={{ width: "200px" }}
            />
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div className="allCardShow">All Card Show Hear</div>
        </div>
      </div>
    </div>
  );
};

export default Room;
