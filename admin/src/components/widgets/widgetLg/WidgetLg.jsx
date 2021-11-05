import { useEffect, useState } from "react";
import { request } from "../../utils/api";
import "./widgetLg.css";
import Moment from "react-moment";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    try {
      const { data } = await request.get("orders");
      setOrders(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest transactions</h3>
      <table className='widgetLgTable'>
        <tbody className='widgetLgTb'>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>Customer</th>
            <th className='widgetLgTh'>Date</th>
            <th className='widgetLgTh'>Amount</th>
            <th className='widgetLgTh'>Status</th>
          </tr>
          {orders.map((order) => (
            <tr className='widgetLgTr' key={order._id}>
              <td className='widgetLgUser'>
                <span className='widgetLgName'>{order.userId}</span>
              </td>
              <td className='widgetLgDate'>
                <Moment fromNow>{order.createdAt}</Moment>
              </td>
              <td className='widgetLgAmount'>${order.amount}</td>
              <td className='widgetLgStatus'>
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
