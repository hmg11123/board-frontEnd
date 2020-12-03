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
 ////////////// - USE QUERY- ///////////////
 const {
  data: noticePageDatum,
  loading: noticePageLoading,
  refetch: noticePageRefetch,
 } = useQuery(VIEW_NOTICE, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });

 const { data: noticeTotalPage, refetch: noticeTotalRefetch } = useQuery(
  VIEW_NOTICE_TOTAL_PAGE,
  {
   variables: {
    searchValue,
    limit,
   },
  }
 );

 ///////////// - USE MUTATION- /////////////

 const [addNoticeMutation] = useMutation(CREATE_NOTICE, {
  variables: {
   title: value.title,
   description: value.desc,
  },
 });

 // const [modifynoticePageMutation] = useMutation(CREATE_NOTICE);

 ///////////// - EVENT HANDLER- ////////////
 const moveLinkHandler = (idx) => {
  history.push(`/notice-detail/${idx}`);
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
   noticePageRefetch();
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

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > noticeTotalPage.viewNoticeBoardTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };

 ////////////// - USE EFFECT- //////////////
 useEffect(() => {
  noticePageRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();
  // noticeTotalRefetch();
  if (noticeTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < noticeTotalPage.viewNoticeBoardTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [noticeTotalPage]);

 return (
  <MM00Presenter
   noticePageDatum={noticePageDatum && noticePageDatum.viewNotice}
   currentPage={currentPage}
   pages={pages}
   limit={limit}
   setCurrentPage={setCurrentPage}
   // infoUpdateHandler={infoUpdateHandler}
   moveLinkHandler={moveLinkHandler}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
   _valueChangeHandler={_valueChangeHandler}
   totalCnt={noticeTotalPage && noticeTotalPage.viewNoticeBoardTotalPage}
   valueTitle={value.title}
   valueDesc={value.desc}
   addNotice={addNotice}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
   //    updateNotice={updateNotice}
  />
 );
};

export default MM00Container;
