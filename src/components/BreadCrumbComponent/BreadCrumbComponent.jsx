import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import { apiCreate } from "../../utils/api";
import styles from "./BreadCrumbStyles.module.css";

const BreadCrumbComponent = ({ apiEndpoint, title }) => {
  const [name, setName] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiCreate.get(`${apiEndpoint}/${id}`);
        setName(response.data.name);
      } catch (error) {
        console.error();
      }
    }
    fetchData();
  }, [apiEndpoint, id]);

  return (
    <Breadcrumb
      className={styles.breadcrumbWrap}
      type="separator"
      separator=">"
      items={[
        {
          title: (
            <a href={`/${apiEndpoint}`}>
              <p className={styles.breadcrumbWrapText}>{title}</p>
            </a>
          ),
        },
        {
          title: <p className={styles.breadcrumbWrapText}>{name}</p>,
        },
      ]}
    />
  );
};

export default BreadCrumbComponent;
