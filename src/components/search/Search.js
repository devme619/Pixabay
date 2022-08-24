import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchList from "../searchlist/SearchList";

const Search = () => {
  const [search, setSearch] = React.useState();
  const [name, setName] = React.useState(null)
  React.useEffect(() => {
    const fetchApi = async () => {
      const url = `https://pixabay.com/api/?key=29394852-a59eac72e2c2e8189a85c0e49&q=${search}&image_type=photo`;
      const res = await fetch(url);
      const json = await res.json();
      console.log(json.hits);
      setName(json.hits)
    };
    fetchApi();
  }, [search]);
  const searchHandler = (event) => {
    return setSearch(event.target.value);
  };
  return (
    <div>
      <Box
        sx={{
          marginTop: 1,
          width: "auto",
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Search Photos"
          id="fullWidth"
          value={search}
          onChange={searchHandler}
        />
      </Box>
      <SearchList itemData={name}/>
    </div>
  );
};

export default Search;
