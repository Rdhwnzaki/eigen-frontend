import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layout, Space, Avatar, List } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";

function ListArticles() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const getDatas = async () => {
    axios
      .get(
        " https://newsapi.org/v2/everything?q=bitcoin&pageSize=20&apiKey=ac68444a26a246f19b317b0d1d900717"
      )
      .then((res) => {
        const value = res.data.articles;
        console.log(value);
        setArticles(value);
      });
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getDatas();
  }, []);
  return (
    <div className="App">
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header
            style={{
              backgroundColor: "#7dbcea",
              paddingBottom: "100px",
            }}
          >
            <h1>Frontend Challenge</h1>
          </Header>
          <Content>
            <List
              itemLayout="horizontal"
              dataSource={articles}
              renderItem={(item, index) => (
                <List.Item
                  onClick={() => navigate(`/detail-articles/${item.title}`)}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://joesch.moe/api/v1/random?key=${index}`}
                      />
                    }
                    title={item.author}
                    description={item.title}
                  />
                </List.Item>
              )}
            />
          </Content>
          <Footer style={{ backgroundColor: "#7dbcea", textAlign: "center" }}>
            Ridhwan Muhammad Zaki
          </Footer>
        </Layout>
      </Space>
    </div>
  );
}

export default ListArticles;
