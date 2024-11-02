import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../src/store/itemSlice";
import { useEffect } from "react";
import { fetchAction } from "../src/store/fetchStatusSlice";
const Fetch = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const items = useSelector((store) => store.items);
  // console.log(fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchAction.fetchingStarted());
    // console.log(fetchStatus.currentlyFetching);

    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products);
        const items = data.products;
        // console.log("api fetch hui", items);
        dispatch(fetchAction.makeFetchDone());
        dispatch(itemActions.addInitialStore(items));

        dispatch(fetchAction.fetchingEnd());
        // console.log(fetchStatus.currentlyFetching);
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  const itemsList = useSelector((store) => store.items);
  //   console.log(itemsList);
  return <></>;
};

export default Fetch;
