import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Image, Layout } from "antd";
import { Header, Footer, Content } from "antd/es/layout/layout";

function DetailArticles() {
  const [detailArticles, setDetailArticles] = useState([]);
  const { title } = useParams();
  const getDetailArticles = async () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${title}&pageSize=1&apiKey=ac68444a26a246f19b317b0d1d900717`
      )
      .then((res) => {
        const value = res.data.articles[0];
        console.log(value);
        setDetailArticles(value);
      });
  };
  useEffect(() => {
    getDetailArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
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
          <Card
            title={detailArticles.title}
            bordered={false}
            style={{
              width: "900px",
              marginLeft: "300px",
              marginTop: "70px",
              marginBottom: "70px",
            }}
            size="small"
          >
            <Image width={875} height={300} src={detailArticles.urlToImage} />
            <p> Author : {detailArticles.author}</p>
            <p>Content : {detailArticles.content}</p>
            <p>Description : {detailArticles.description}</p>
            <p>Url : {detailArticles.url}</p>
            <p>Published at : {detailArticles.publishedAt}</p>
          </Card>
        </Content>
        <Footer style={{ backgroundColor: "#7dbcea", textAlign: "center" }}>
          Ridhwan Muhammad Zaki
        </Footer>
      </Layout>
    </div>
  );
}

export default DetailArticles;
