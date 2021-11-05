import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { userRequest } from "../../components/utils/api";
import { emptyCart } from "../../redux/slices/cart";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Success = () => {
  const location = useLocation();
  const history = useHistory();
  const data = location.state.stripeData;
  const cart = location.state.cart;

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState(null);

  const handleNavigation = (tagetPage) => {
    history.push(tagetPage);
  };

  useEffect(() => {
    const placeOrder = async () => {
      try {
        const result = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        dispatch(emptyCart());
        setOrderId(result.data._id);
      } catch (err) {}
    };
    data && placeOrder();
  }, [data]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button
        style={{ padding: 10, marginTop: 20 }}
        onClick={() => handleNavigation("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
