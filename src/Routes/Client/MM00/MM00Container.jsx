import React, { useState, useEffect } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM00Presenter = withSplitting(() => import("./MM00Presenter"));
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 VIEW_NOTICE,
 CREATE_NOTICE,
 VIEW_NOTICE_TOTAL_PAGE,
 UPDATE_NOTICE,
} from "./MM00Queries";
import { toast } from "react-toastify";
import "react-confirm-alert/src/react-confirm-alert.css";

const MM00Container = ({ history }) => {
 ////////////// - USE QUERY- ///////////////
 const {
  data: mainBannerData,
  loading: mainBannerLoading,
  refetch: mainBannerRefetch,
 } = useQuery(VIEW_NOTICE);

 const { data: noticePageData, refetch: noticePageRefetch } = useQuery(
  VIEW_NOTICE_TOTAL_PAGE,
  {
   variables: {
    searchValue,
    limit,
   },
  }
 );

 ////////////// - USE STATE- ///////////////

 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const [pages, setPages] = useState(null);
 const [currentPage, setCurrentPage] = useState(0);
 const [limit, setLimit] = useState(10);
 const [searchValue, setSearchValue] = useState("");
 const [value, setValue] = useState({
  title: "",
  desc: "",
 });

 ///////////// - USE MUTATION- /////////////

 const [addNoticeMutation] = useMutation(CREATE_NOTICE, {
  variables: {
   title: value.title,
   description: value.desc,
  },
 });

 const [updateNoticeMutation] = useMutation(UPDATE_NOTICE);

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

 const updateNotice = async () => {
  const { data } = await updateNoticeMutation({
   variables: {
    title: value.title,
    description: value.desc,
   },
  });
  if (data.updateNotice) {
   toast.info("게시글이 수정되었습니다");
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
  const nextState = { ...value };

  nextState[event.target.name] = event.target.value;

  setValue(nextState);
 };

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > noticePageData.viewNoticeBoardTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };

 ////////////// - USE EFFECT- //////////////

 useEffect(() => {
  // noticeDatumRefetch();
  // noticePageRefetch();
  if (noticePageData && !pages) {
   const temp = [];

   for (let i = 0; i < noticePageData.viewNoticeBoardTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [noticePageData]);

 return (
  <MM00Presenter
   mainBannerData={mainBannerData && mainBannerData.viewNotice}
   currentPage={currentPage}
   pages={pages}
   limit={limit}
   setCurrentPage={setCurrentPage}
   // infoUpdateHandler={infoUpdateHandler}
   moveLinkHandler={moveLinkHandler}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
   _valueChangeHandler={_valueChangeHandler}
   valueTitle={value.title}
   valueDesc={value.desc}
   addNotice={addNotice}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
   updateNotice={updateNotice}
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
