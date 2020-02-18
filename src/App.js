import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Button } from "antd";
import "./App.css";
import Call from "./Image/call-answer.png";
import Apple from "./Image/apple.png";
import Android from "./Image/android.png";
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header
          style={{
            background: "#e91e63",
            padding: "0 105px",
            boxShadow: "0 0 20px rgba(0,0,0,.1)"
          }}
        >
          <div
            className="logo"
            style={{
              float: "left",
              fontSize: "26px",
              color: "white",
              fontFamily: "sans-serif"
            }}
          >
            Ayojon
          </div>
          <div className="logo" style={{ float: "right" }}>
            <img
              width={"30"}
              height={"30"}
              //altname={this.props.user.full_name}
              id={"profile_logo_header"}
              src={Call}
            />

            <span style={{ color: "white", fontSize: "18px", marginLeft: 10 }}>
              (+88) 01401-148202
            </span>
          </div>
        </Header>
        <Content
          style={{
            padding: "0 50px",
            background: "#ffffff",
            padding: "0px 133px"
          }}
        >
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 280,
              width: "961px",
              margin: "auto"
            }}
          >
            <p
              style={{
                fontSize: "24px",
                color: "#6e6e6f",
                marginBottom: "123px",
                marginTop: "20px"
              }}
            >
              Ayojon - Your Complete Event Solution
            </p>

            <div style={{ float: "left", width: "30%" }}>
              <Button
                style={{
                  background: "rgb(246, 79, 136)",
                  color: "white",
                  height: 59,
                  borderRadius: 23,
                  fontSize: 18
                }}
              >
                Go To Ayojon Website
              </Button>
            </div>
            <div style={{ float: "left", width: "40%", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "30px",
                  color: "#6e6e6f",
                  marginBottom: "123px",
                  fontFamily: "monospace"
                }}
              >
                Coming Soon ...
              </p>
            </div>

            <div style={{ float: "right", width: "30%" }}>
              <a href="https://google.com/store/apps/details?id=xyz.romoni.userapp&hl=en">
                <img
                  src={Apple}
                  className="d-inline-block my-2"
                  style={{ width: "188px", height: "62px" }}
                />
              </a>
              <br />
              <br />
              <a href="https://apps.apple.com/us/app/romoni/id1476056028">
                <img
                  src={Android}
                  className="d-inline-block my-2"
                  style={{ width: "188px", height: "62px" }}
                />
              </a>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            width: "100%"
          }}
        >
          Copyright © 2020 All Rights Reserved by Ayojon Services Ltd.
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
