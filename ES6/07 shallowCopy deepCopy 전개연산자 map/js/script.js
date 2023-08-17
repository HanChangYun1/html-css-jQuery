{
  let arr = ["가", "나", "다"];
  let arrCopy = [...arr];
  let obj = { 이름: "홍길동", 나이: "24" };
  let objCopy = { ...obj };
}

{
  let arr = [
    { 이름: "홍길동", 성별: "남" },
    { 이름: "홍길순", 성별: "여" },
  ];
  let arrCopy = [...arr];
  arr[0].성별 = "여";
  console.log(arrCopy);
}

{
}
