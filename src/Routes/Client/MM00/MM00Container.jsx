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
///////////// - USE MUTATION- /////////////


// const [modifyMainBannerMutation] = useMutation(CREATE_NOTICE);



///////////// - EVENT HANDLER- ////////////
  const moveLinkHandler = (link) => {
    history.push(`/notice-detail/${link}`);
  };
  // const infoUpdateHandler = async () => {
  //   const { data } = await modifyMainBannerMutation({
  //     variables: {
  //       id: mainBannerDatum && mainBannerDatum.getMainBanner[currentTab]._id,
  //       title,
  //       content,
  //       link,
  //     },
  //   });

  //   if (data.modifyMainBanner) {
  //     toast.info("MAIN BANNER INFORMATION UPDATE");
  //     mainBannerRefetch();
  //   }
  // };
////////////// - USE EFFECT- //////////////
  return (
    <MM00Presenter
      mainBannerData={mainBannerData && mainBannerData.viewNotice}
      // infoUpdateHandler={infoUpdateHandler}
      moveLinkHandler={moveLinkHandler}
    />
  );
}

export default MM00Container;