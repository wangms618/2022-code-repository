import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import styles from "./Partner.module.css";
interface PartnerProps {
    images: string[];
}

export const Partner: React.FC<PartnerProps> = ({ images }) => {
    return (
        <div className={styles.content}>
            <Divider orientation="left">
                <Typography.Title level={3} type="warning">
                    合作伙伴
                </Typography.Title>
            </Divider>

            <Row>
                {images.map((url, index) => {
                    return (
                        <Col key={index} className={styles.flex} span={6}>
                            <img className={styles.images} src={url} alt="" />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};
