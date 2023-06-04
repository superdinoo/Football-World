import { SearchOutlined } from "@ant-design/icons";

import style from "./Search.module.css";

export const Search = ({
  searchValue,
  searchEntities,
  setSearchValue,
  resetSearch,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchEntities();
      }}
    >
      <div className={style.form}>
        <input
          placeholder="Поиск..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className={style.search}
        />
        <button className={style.submit}>
          <SearchOutlined />
        </button>
        <button className={style.reset} onClick={resetSearch}>
          сбросить
        </button>
      </div>
    </form>
  );
};
