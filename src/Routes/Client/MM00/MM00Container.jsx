import React, { useState, useEffect } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM00Presenter = withSplitting(() => import("./MM00Presenter"));
import { useQuery, useMutation } from "react-apollo-hooks";
import { VIEW_NOTICE, CREATE_NOTICE } from "./MM00Queries";
import { toast } from "react-toastify";
import "react-confirm-alert/src/react-confirm-alert.css";

const MM00Container = ({ history }) => {
 ////////////// - USE QUERY- ///////////////
 const {
  data: mainBannerData,
  loading: mainBannerLoading,
  refetch: mainBannerRefetch,
 } = useQuery(VIEW_NOTICE);

 ////////////// - USE STATE- ///////////////

 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const [value, setValue] = useState({
   title:"",
   desc: "",
 });

 ///////////// - USE MUTATION- /////////////

 const [addNoticeMutation] = useMutation(CREATE_NOTICE, {
  variables: {
   title: value.title,
   description: value.desc,
  },
 });

 // const [modifyMainBannerMutation] = useMutation(CREATE_NOTICE);

 ///////////// - EVENT HANDLER- ////////////
 const moveLinkHandler = (link) => {
  history.push(`/notice-detail/${link}`);
 };

 const addNotice = async () => {
  if (value.title === "") {
    toast.error("NOTICE TYPE IS MUST!");
    return;
  }
  if (value.desc === "") {
    toast.error("NOTICE TYPE IS MUST!");
    return;
  }
  
  const { data } = await addNoticeMutation();
  if (data.createNotice) {
    toast.info("게시글이 추가되었습니다");
    mainBannerRefetch();
    setValue("");
    _isDialogOpenToggle();
  } else {
    toast.error("다시 시도해주세요");
  }
 };

 const _isDialogOpenToggle = () => {
  setIsDialogOpen(!isDialogOpen);
 };

 const _valueChangeHandler = (event) => {
  const nextState = {...value};

  nextState[event.target.name] = event.target.value;

  setValue(nextState);
};

 ////////////// - USE EFFECT- //////////////
 return (
  <MM00Presenter
   mainBannerData={mainBannerData && mainBannerData.viewNotice}
   // infoUpdateHandler={infoUpdateHandler}
   moveLinkHandler={moveLinkHandler}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
   _valueChangeHandler={_valueChangeHandler}
   valueTitle={value.title}
   valueDesc={value.desc}
   addNotice={addNotice}
  />
 );
};

export default MM00Container;
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
