import React from "react";
import {
    Header,
    Footer,
    Carousel,
    SideMenu,
    ProductCollection,
    Partner,
} from "../../components";
import styles from "./HomePage.module.css";
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "../..//assets/images/sider_2019_12-09.png";
import sideImage2 from "../..//assets/images/sider_2019_02-04.png";
import sideImage3 from "../..//assets/images/sider_2019_02-04-2.png";
import partner1 from "../..//assets/images/follow-826033_640.png";
import partner2 from "../..//assets/images/facebook-807588_640.png";
import partner3 from "../..//assets/images/icon-720944_640.png";
import partner4 from "../../assets/images/microsoft-80658_640.png";
const partnerImages = [partner1, partner2, partner3, partner4];

export class HomePage extends React.Component {
    render() {
        return (
            <>
                <Header />
                {/* 页面内容 content */}
                <div className={styles["page-content"]}>
                    <Row style={{ marginTop: 20 }}>
                        <Col span={6}>
                            <SideMenu />
                        </Col>
                        <Col span={18}>
                            <Carousel />
                        </Col>
                    </Row>
                    <ProductCollection
                        title={
                            <Typography.Title level={3} type="warning">
                                爆款推荐
                            </Typography.Title>
                        }
                        sideImage={sideImage}
                        products={productList1}
                    />
                    <ProductCollection
                        title={
                            <Typography.Title level={3} type="danger">
                                新品上市
                            </Typography.Title>
                        }
                        sideImage={sideImage2}
                        products={productList2}
                    />
                    <ProductCollection
                        title={
                            <Typography.Title level={3} type="success">
                                国内游推荐
                            </Typography.Title>
                        }
                        sideImage={sideImage3}
                        products={productList3}
                    />
                </div>
                <Partner images={partnerImages}></Partner>
                <Footer />
            </>
        );
    }
}
