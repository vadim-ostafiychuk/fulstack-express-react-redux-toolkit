import { Button, Result, Row } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Paths } from "../../paths";

const Statuses: Record<string, string> = {
  created: "Пользователь успешно создан",
  updated: "Пользователь успешно обновлен",
  deleted: "Пользователь успешно удален",
};
const Status = () => {
  const { status } = useParams();
  return (
    <Row align="middle" justify="center" style={{ width: "100%" }}>
      <Result
        status={status ? "success" : 404}
        title={status ? Statuses[status] : "Не найдено"}
        extra={
          <Button key="dashboard">
            <Link to={Paths.home}>На главную</Link>
          </Button>
        }
      ></Result>
    </Row>
  );
};

export default Status;
