import { App, Button, Space, Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setGeneration,
  setDataApi,
  setLoading,
} from "../reducers/NotificationReducer";

const Notification = () => {
  const dispatch = useDispatch();

  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success("Success!");
  };

  const generation = useSelector((state) => state.data.generation);
  const dataApi = useSelector((state) => state.data.dataApi);
  const loading = useSelector((state) => state.data.loading);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setDataApi(data));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        console.log("I'm in .catch", error);
        dispatch(setLoading(false));
      });
  }, [generation, dispatch]);
  const showModal = () => {
    modal.warning({
      title: "Activity Generation",
      content: "Your generation activity!!",
    });
  };

  const showNotification = () => {
    notification.info({
      message: `Activity Generation`,
      description: "Your generation activity!!",
      placement: "topLeft",
    });
  };

  const onGeneration = () => {
    dispatch(setGeneration(!generation));
    let activity = dataApi.activity;
    sessionStorage.setItem("text", activity);
    localStorage.setItem("text", activity);
    showModal(activity);
  };

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <>
          <div>
            <h2>This is localStorage - {localStorage.getItem("text")}</h2>
          </div>
          <Space>
            <Button type="primary" onClick={showMessage}>
              Open message
            </Button>
            <Button type="primary" onClick={showNotification}>
              Open notification
            </Button>
            <div>
              <Button className="btn-clear" onClick={onGeneration}>
                Generation activity
              </Button>
            </div>
          </Space>
          <h1>{dataApi.accessibility}</h1>
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default () => (
  <App>
    <Notification />
  </App>
);
