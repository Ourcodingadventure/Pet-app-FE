import { Paper } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import PetList from "../../components/PetList";
import AdvanceSearch from "../../components/search/AdvSearch";
import BasicSearch from "../../components/search/BasicSearch";
import Toggler from "../../components/search/Toggler";
import { GlobalState } from "../../Context/Context";

import { getPets } from "../../lib/lib";

function SearchPage() {
  const [advSearch, setAdvanceSearch] = useState(false);
  const [data, setData] = useState(null);
  const [type, setType] = useState("");
  const [petName, setPetName] = useState("");
  const [petHeight, setPetHeight] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [adoptionStatus, setStatus] = useState("");
  const { setLoading, change } = useContext(GlobalState);
  const [firstCall, setFirstCall] = useState(true);

  const getRequest = async () => {
    setFirstCall(false);
    let params;

    if (advSearch) {
      params = {
        petName,
        petHeight,
        petWeight,
        adoptionStatus,
        type,
      };
    } else {
      params = {
        type,
      };
    }
    try {
      setLoading(true);
      let response = await getPets(params);
      setData(response.pet);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!firstCall) {
      getRequest();
    }
  }, [change]);
  return (
    <div style={{ padding: 30 }}>
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
          padding: 30,
          overflow: "hidden",
          borderRadius: 10,
          width: 350,
          height: 400,
          margin: "auto",
          alignSelf: "center",
          opacity: ".8",
        }}
        elevation={3}
      >
        <Toggler advSearch={advSearch} setAdvanceSearch={setAdvanceSearch} />
        {advSearch ? (
          <AdvanceSearch
            setPetHeight={setPetHeight}
            setPetName={setPetName}
            setPetWeight={setPetWeight}
            setStatus={setStatus}
            setType={setType}
            type={type}
            adoptionStatus={adoptionStatus}
            getTypePet={getRequest}
          />
        ) : (
          <BasicSearch getTypePet={getRequest} type={type} setType={setType} />
        )}
      </Paper>
      {!data ? null : <PetList data={data} />}
    </div>
  );
}

export default SearchPage;
