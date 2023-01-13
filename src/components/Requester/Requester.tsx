import {
  Map,
  Table,
  order,
  getMap,
  useEffect,
  setCoordId,
  createUrlParam,
  useAppSelector,
  coordIdSelector,
  useAppDispatch,
  removeActiveBackground,
} from "./index";

export default function Requester() {
  const dispatch = useAppDispatch();

  const coordId = useAppSelector(coordIdSelector);

  function handleOrderItem(e: React.MouseEvent<HTMLAnchorElement>) {
    removeActiveBackground(e);

    const rowParent = (
      (e.target as HTMLAnchorElement).parentNode as HTMLElement
    ).parentNode as HTMLTableRowElement;

    if (!(rowParent && rowParent.dataset.rowKey)) return;

    const coordId = +rowParent.dataset.rowKey;

    dispatch(setCoordId(coordId));
    dispatch(getMap(createUrlParam(coordId)));
  }

  useEffect(() => {
    dispatch(getMap(createUrlParam(coordId)));
    // eslint-disable-next-line
  }, []);

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
      <div className="requester">
        <div className="requester__wrap">
          <section className="requester__table">
            <Table
              columns={columns}
              dataSource={dataSource}
              pagination={{
                position: [],
              }}
            />
          </section>
          <div className="requester__map">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}
