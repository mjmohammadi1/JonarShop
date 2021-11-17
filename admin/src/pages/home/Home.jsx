import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgets/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgets/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { request } from "../../components/utils/api";
import { useSelector } from "react-redux";

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const user = useSelector((state) => state.user.currentUser);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await request.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              "Active User": item.total,
              id: item._id - 1,
            },
          ])
        );
      } catch {}
    };
    user && getStats();
  }, [MONTHS]);

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
