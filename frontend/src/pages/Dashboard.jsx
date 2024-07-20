import React from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Spinner from '../components/Spinner';

import GoalForm from "../components/GoalForm";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.auth);
  const {goals, isLoading, isError, message} = useSelector((state) => state.goals);

  useEffect(() => {

    if(isError){
      console.log(message);
    }

    if(!user){
      navigate('/login');

      // added by me
      return;
    }

    dispatch(getGoals());

    // resetting the state on unmount - clear the goals when dashboard is left 
    return () => {
      dispatch(reset());
    }

  }, [user, navigate, isError, message, dispatch])


  if(isLoading){
    return <Spinner/>
  }

  return <>
    <section className="heading">
      <h1>welcome {user && user.name}</h1>
      <p>goals dashboard</p>
    </section>
    <GoalForm/>
  </>;
}

export default Dashboard;
