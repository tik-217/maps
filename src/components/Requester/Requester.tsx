import TableCoord from "../UI/TableCoord/TableCoord";
import {
  Map,
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

  return (
    <>
      <div className="requester">
        <div className="requester__wrap">
          <section className="requester__table">
            <TableCoord handleOrderItem={handleOrderItem} />
          </section>
          <div className="requester__map">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}
