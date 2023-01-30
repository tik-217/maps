import { Table, order } from "./index";

interface ITableCoord {
  handleOrderItem: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function TableCoord({
  handleOrderItem,
}: ITableCoord) {
  const columns = [
    {
      title: "Номер заявки",
      dataIndex: "applicationNumber",
      key: "applicationNumber",
    },
    {
      title: "Координаты ОТ lat",
      dataIndex: "fromLat",
      key: "fromLat",
    },
    {
      title: "Координаты ОТ lng",
      dataIndex: "fromLng",
      key: "fromLng",
    },
    {
      title: "Координаты ДО lat",
      dataIndex: "beforeLat",
      key: "beforeLat",
    },
    {
      title: "Координаты ДО lng",
      dataIndex: "beforeLng",
      key: "beforeLng",
    },
    {
      title: "",
      dataIndex: "",
      key: "Show",
      render: () => (
        // eslint-disable-next-line
        <a href="#" onClick={(e) => handleOrderItem(e)}>
          Показать
        </a>
      ),
    },
  ];

  const dataSource = order.map((el, i) => {
    return {
      key: i,
      applicationNumber: `№ ${i + 1}`,
      fromLat: el[0],
      fromLng: el[1],
      beforeLat: el[2],
      beforeLng: el[3],
    };
  });

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          position: [],
        }}
      />
    </>
  );
}
