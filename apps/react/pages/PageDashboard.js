import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../store/actions";

const PageDashboard = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <p>Hello counter: { counter }</p>
      <p>is logged: { isLogged.toString() }</p>

      <p className="mx-4 my-4">controll the counter</p>

      <button className="btn btn-blue mx-12" onClick={() => dispatch(increment(5))}>+</button>
      <button className="btn btn-blue" onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default PageDashboard;
