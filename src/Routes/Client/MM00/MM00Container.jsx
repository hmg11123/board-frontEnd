import React, { useState, useEffect } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM00Presenter = withSplitting(() => import("./MM00Presenter"));
import { useQuery, useMutation } from "react-apollo-hooks";
import { VIEW_NOTICE} from "./MM00Queries";


const MM00Container = ({history}) => {
////////////// - USE QUERY- ///////////////
  const {
    data: mainBannerData,
    loading: mainBannerLoading,
    refetch: mainBannerRefetch,
  } = useQuery(VIEW_NOTICE);

///////////// - EVENT HANDLER- ////////////
  const moveLinkHandler = (link) => {
    history.push(`/notice-detail/${link}`);
  };


////////////// - USE EFFECT- //////////////
  return (
    <MM00Presenter
      mainBannerData={mainBannerData && mainBannerData.getMainBanner}
    />
  );
}

export default MM00Container;