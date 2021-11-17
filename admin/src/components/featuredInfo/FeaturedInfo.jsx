import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { request } from "../../components/utils/api";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const getIncome = async () => {
    try {
      const result = await request.get("orders/income");
      setIncome(result.data.sort((a, b) => a._id - b._id));
      setPercentage((result.data[1].total * 100) / result.data[0].total - 100);
    } catch {}
  };
  useEffect(() => {
    getIncome();
  }, []);
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Month Income</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>${income[1]?.total}</span>
          <span className='featuredMoneyRate'>
            %{Math.floor(percentage)}{" "}
            {percentage < 0 ? (
              <ArrowDownward className='featuredIcon negative' />
            ) : (
              <ArrowUpward className='featuredIcon' />
            )}
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$4,415</span>
          <span className='featuredMoneyRate'>
            -1.4 <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,225</span>
          <span className='featuredMoneyRate'>
            +2.4 <ArrowUpward className='featuredIcon' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
    </div>
  );
}
