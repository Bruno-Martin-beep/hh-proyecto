import { useEffect, useState } from "react";
import { getData, Option } from "../utils/fetchData";


const useOptions = () => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    getData()
      .then((data) => setOptions(data));
  }, []);

  return options
}

export default useOptions