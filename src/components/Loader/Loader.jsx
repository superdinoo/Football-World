import classNames from "classnames";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrap}>
      <div className={classNames(styles.loader, styles.loaderItem)}>
        <div>
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
