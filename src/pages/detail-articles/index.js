import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Image, Layout } from "antd";
import { Header, Footer, Content } from "antd/es/layout/layout";
import Moment from "react-moment";
import defaultImage from "../../images/default.png";

const cardStyle = {
  width: "900px",
  marginTop: "70px",
  marginBottom: "70px",
};

const headerStyle = {
  backgroundColor: "#7dbcea",
  paddingBottom: "100px",
  textAlign: "center",
};

const footerStyle = {
  backgroundColor: "#7dbcea",
  textAlign: "center",
};

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const textStyle = {
  color: "red",
  fontWeight: "bold",
};

const DetailArticles = () => {
  const [detailArticles, setDetailArticles] = useState([]);
  const [source, setSource] = useState([]);
  const { title } = useParams();
  const getDetailArticles = async () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}?q=${title}&pageSize=1&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const value = res.data.articles[0];
        console.log(value);
        setDetailArticles(value);
        setSource(res.data.articles[0].source.name);
      });
  };
  useEffect(() => {
    getDetailArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Layout>
        <Header style={headerStyle}>
          <h1>News Articles</h1>
        </Header>
        <Content style={contentStyle}>
          <Card
            title={detailArticles.title}
            bordered={false}
            style={cardStyle}
            size="small"
          >
            <Image
              width={875}
              height={300}
              src={
                detailArticles.urlToImage
                  ? detailArticles.urlToImage
                  : defaultImage
              }
            />
            <p style={textStyle}>Source : {source}</p>
            <p style={textStyle}>
              Author :
              {detailArticles.author ? detailArticles.author : " Not Found"}
            </p>
            <p>Content : {detailArticles.content}</p>
            <p>Description : {detailArticles.description}</p>
            <p style={textStyle}>
              Published At :
              <Moment format=" DD MMMM YYYY">
                {detailArticles.publishedAt}
              </Moment>
            </p>
          </Card>
        </Content>
        <Footer style={footerStyle}> &copy; Copyright 2023</Footer>
      </Layout>
    </div>
  );
};

export default DetailArticles;
