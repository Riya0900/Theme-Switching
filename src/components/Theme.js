import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BG_KEY } from "../redux/bg.reducer";

export default function Theme() {

  const DARK_THEME = 'DARK_THEME'
  const LIGHT_THEME = 'LIGHT_THEME'

  const DarkTheme = () =>{
    return{
        type: DARK_THEME,
        payload: 'change background'
    }
  }

  const LightTheme = () =>{
    return{
        type: LIGHT_THEME,
        payload: 'reset background'
    }
  }

  const dispatch = useDispatch();

  const clickDark = () => {
    dispatch(DarkTheme());
  };

  const clickLight = () => {
    dispatch(LightTheme());
  };

  const viewBg = useSelector((state) => {
    return state[BG_KEY];
  });

  return (
    <React.Fragment>
      <div className="row mt-5">
          <div className="card-header pt-4">
            <h2 className="line">CHOOSE THE THEME : </h2>
            <button
                className="darkbtn"
                onClick={clickDark}
              >
                Dark Theme
              </button>
              
              <button
                className="lightbtn"
                onClick={clickLight}
              >
                Light Theme
              </button>
          </div>

          <br/>
            <div>
              
            </div>


            <div
              className="div_bg"
              style={{ backgroundColor: viewBg.color }}
            ></div>
          </div>

    </React.Fragment>
  );
};