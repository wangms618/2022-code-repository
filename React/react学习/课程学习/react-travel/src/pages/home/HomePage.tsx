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
import { withTranslation, WithTranslation } from "react-i18next";
const partnerImages = [partner1, partner2, partner3, partner4];

class HomePageComponent extends React.Component<WithTranslation> {
    render() {
        const { t } = this.props;
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
                                {t("home_page.hot_recommended")}
                            </Typography.Title>
                        }
                        sideImage={sideImage}
                        products={productList1}
                    />
                    <ProductCollection
                        title={
                            <Typography.Title level={3} type="danger">
                                {t("home_page.new_arrival")}
                            </Typography.Title>
                        }
                        sideImage={sideImage2}
                        products={productList2}
                    />
                    <ProductCollection
                        title={
                            <Typography.Title level={3} type="success">
                                {t("home_page.domestic_travel")}
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

export const HomePage = withTranslation()(HomePageComponent);
