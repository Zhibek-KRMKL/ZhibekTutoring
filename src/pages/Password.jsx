import { Button, Input, Space, Spin } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { CounterContext } from "../context/CounterProvider";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../reducers/NotificationReducer";

function Password() {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [countries, setCountries] = useState();
  const [buttonClick, setButtonClick] = useState(true);
  const { counter, increment, decrement } = useContext(CounterContext);
  const loading = useSelector((state) => state.data.loading);
  useEffect(() => {
    dispatch(setLoading(false));
  }, []);
  useEffect(() => {
    !buttonClick
      ? fetch("https://restcountries.com/v3.1/all")
          .then((response) => {
            dispatch(setLoading(true));
            return response.json();
          })
          .then((data) => {
            setCountries(data);
            dispatch(setLoading(false));
          })
          .catch((error) => {})
      : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonClick]);
  return (
    <Space direction="vertical">
      <p>{countries === undefined ? null : countries.area}</p>
      <Input.Password placeholder="input password" />
      <Input.Password
        placeholder="input password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <Space direction="horizontal">
        <Input.Password
          placeholder="input password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
        <Button
          style={{
            width: 80,
          }}
          onClick={() => setPasswordVisible((prevState) => !prevState)}
        >
          {passwordVisible ? "Hide" : "Show"}
        </Button>
      </Space>
      <Button type="primary" onClick={() => setButtonClick(!buttonClick)}>
        Click here
      </Button>
      {loading ? (
        <Spin />
      ) : (
        <table>
          <tr>
            <th style={{ border: "solid 2px pink", padding: "5px" }}>Common</th>
            <th style={{ border: "solid 2px pink", padding: "5px" }}>
              Official
            </th>
          </tr>
          {countries?.map((item) => (
            <>
              <tr>
                <td style={{ border: "solid 2px pink", padding: "3px" }}>
                  {item.name.common}
                </td>
                <td style={{ border: "solid 2px pink", padding: "3px" }}>
                  {item.name.official}
                </td>
              </tr>
            </>
          ))}
        </table>
      )}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button type="primary" onClick={increment}>
          Decrement counter
        </Button>
        <Button type="primary" onClick={decrement}>
          Decrement counter
        </Button>
      </div>
      <div>
        <h2>{counter}</h2>
      </div>
    </Space>
  );
}

export default Password;
