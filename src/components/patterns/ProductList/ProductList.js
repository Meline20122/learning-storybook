import Loading from "../../atoms/Loading";
import Error from "../../atoms/Error";
import ProductListItem from "../ProductListItem";
export const statusTypes = {
  loading: "loading",
  errored: "errored",
  loaded: "loaded",
};

export default function ProductList({ status, data
                                    }) {
  console.log(data)
  if (status === statusTypes.loading) {
    return <Loading />;
  }
  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />;
  }
  return <ProductListItem data={data[0]} />
}
