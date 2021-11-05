import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { request } from "../../../components/utils/api";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await request.get("users/?new=true");
      setUsers(res.data);
    } catch {}
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {users.map((user) => (
          <li className='widgetSmListItem' key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=''
              className='widgetSmImg'
            />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.username}</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
