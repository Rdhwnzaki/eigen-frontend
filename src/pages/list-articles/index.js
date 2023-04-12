import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layout, Space, List, Image } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../images/default.png";

const headerStyle = {
  backgroundColor: "#7dbcea",
  paddingBottom: "100px",
  textAlign: "center",
};

const footerStyle = {
  backgroundColor: "#7dbcea",
  textAlign: "center",
};

const imageStyle = {
  paddingRight: "10px",
  paddingLeft: "10px",
};

const ListArticles = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const getDatas = async () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}?q=bitcoin&pageSize=20&apiKey=${process.env.REACT_APP_API_KEY}`
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
          <Header style={headerStyle}>
            <h1>News Articles</h1>
          </Header>
          <Content>
            <List
              itemLayout="horizontal"
              dataSource={articles}
              renderItem={(item, index) => (
                <List.Item
                  onClick={() => navigate(`/detail-articles/${item.title}`)}
                >
                  <Image
                    width={150}
                    height={100}
                    src={item.urlToImage ? item.urlToImage : defaultImage}
                    style={imageStyle}
                  />
                  <List.Item.Meta
                    description={item.source.name}
                    title={item.title}
                  />
                </List.Item>
              )}
            />
          </Content>
          <Footer style={footerStyle}>&copy; Copyright 2023</Footer>
        </Layout>
      </Space>
    </div>
  );
};

export default ListArticles;
