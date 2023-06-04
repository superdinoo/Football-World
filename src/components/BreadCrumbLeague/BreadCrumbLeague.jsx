import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import { apiCreate } from "../../utils/api";
import styles from "./BreadCrumbLeague.module.css";

const BreadCrumbLeague = () => {
  const [nameTeam, setNameTeam] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      try {
        const nameTeam = await apiCreate.get(`/competitions/${id}`);
        setNameTeam(nameTeam.data.name);
      } catch (error) {
        console.error();
      }
    }
    fetchMatches();
  }, [id]);

  return (
    <Breadcrumb
      className={styles.breadcrumbWrap}
      type="separator"
      separator=">"
      items={[
        {
          title: (
            <a href="/competitions">
              <p className={styles.breadcrumbWrapText}>Команды</p>
            </a>
          ),
        },
        {
          title: <p className={styles.breadcrumbWrapText}>{nameTeam}</p>,
        },
      ]}
    />
  );
};
export default BreadCrumbLeague;
