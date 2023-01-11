import { useState, Map, order } from "./index";

export default function Requester() {
  const [coordId, setCoordId] = useState(0);

  function handleOrderItem(e) {
    const coordId = +e.target.attributes[0].value;

    setCoordId(coordId);
  }

  return (
    <>
      <div className="requester">
        <div className="requester__wrap">
          <section className="requester__table">
            <h3>Заказы</h3>
            <table>
              <tbody>
                <tr>
                  <td>Номер заявки</td>
                  <td>Координаты ОТ lat</td>
                  <td>Координаты ОТ lng</td>
                  <td>Координаты ДО lat</td>
                  <td>Координаты ДО lng</td>
                </tr>
                {order.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td data-coordid={i} onClick={(e) => handleOrderItem(e)}>
                        №{i + 1}
                      </td>
                      <td>{el[0]}</td>
                      <td>{el[1]} </td>
                      <td>{el[2]}</td>
                      <td>{el[3]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
          <div className="requester__map">
            <Map coordId={coordId} />
          </div>
        </div>
      </div>
    </>
  );
}
