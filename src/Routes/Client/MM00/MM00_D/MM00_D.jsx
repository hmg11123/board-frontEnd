import React, { useEffect, useState } from "react";
import {
 VIEW_NOTICE_DETAIL,
 VIEW_NOTICE_BEFORE_ID,
 VIEW_NOTICE_NEXT_ID,
 UPDATE_NOTICE,
 DELETE_NOTICE,
} from "../MM00Queries";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import {
 WholeWrapper,
 RsWrapper,
 CommonButton,
 Wrapper,
 TextInput,
} from "../../../../Components/CommonComponents";
import CircularIndeterminate from "../../../../Components/loading/CircularIndeterminate";
import useTitle from "@4leaf.ysh/use-title";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { confirmAlert } from "react-confirm-alert";

const Board_D_title = styled.h2`
 width: 100%;
 padding: 20px;
 font-size: 22px;
 font-weight: 700;
`;

const Board_D = styled.ul`
 width: 100%;
 height: ${(props) => (props.height ? props.height : `40px`)};
 display: flex;
 flex-direction: row;
 align-items: center;

 background: ${(props) => props.bgColor};

 @media (max-width: 700px) {
  flex-direction: column;
  height: auto;
 }
`;

const Board_D_List = styled.li`
 width: ${(props) => props.width};
 line-height: 40px;
 background: ${(props) => props.bgColor};
 color: ${(props) => props.color};
 text-align: ${(props) => props.ta || `center`};
 padding: ${(props) => (props.padding ? props.padding : `0px 10px`)};
 box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
 border-radius: ${(props) => props.radius};
`;

const Board_D_Desc = styled.div`
 width: 100%;
 min-height: 500px;
 padding: 15px;
 line-height: 1.4;
 box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
`;

export default withResizeDetector(({ match, history, width }) => {
 ////////////// - USE CONTEXT- ///////////////

 ////////////// - USE STATE- ///////////////
 const [currentTab, setCurrentTab] = useState(0);
 const [currentData, setCurrentData] = useState(null);
 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const [currentPage, setCurrentPage] = useState(0);
 const [limit, setLimit] = useState(10);
 const [searchValue, setSearchValue] = useState("");
 const [value, setValue] = useState({
  title: "",
  desc: "",
 });
 ///////////// - USE QUERY- ////////////////

 const {
  data: noticePageDatum,
  loading: mainBannerLoading,
  refetch: mainBannerRefetch,
 } = useQuery(VIEW_NOTICE_DETAIL, {
  variables: {
   id: match.params.key,
  },
 });
 const {
  data: noticeData,
  loading: noticeLoading,
  refetch: noticeRefetch,
 } = useQuery(VIEW_NOTICE_DETAIL, {
  variables: {
   id: match.params.key,
  },
 });

 const {
  data: noticeNextData,
  loading: noticeNextLoading,
  refetch: noticeNextRefetch,
 } = useQuery(VIEW_NOTICE_NEXT_ID, {
  variables: {
   id: match.params.key,
  },
 });

 const {
  data: noticeBeforeData,
  loading: noticeBeforeLoading,
  refetch: noticeBeforeRefetch,
 } = useQuery(VIEW_NOTICE_BEFORE_ID, {
  variables: {
   id: match.params.key,
  },
 });

 ///////////// - USE MUTATION- /////////////

 const [updateNoticeMutation] = useMutation(UPDATE_NOTICE);
 const [deleteNoticeMutation] = useMutation(DELETE_NOTICE);

 ///////////// - EVENT HANDLER- ////////////

 const updateNotice = async () => {
  const { data } = await updateNoticeMutation({
   variables: {
    id: noticePageDatum && noticePageDatum.viewNoticeDetail._id,
    title: value.title,
    description: value.desc,
   },
  });
  console.log(data.updateNotice);
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
 const _moveListBoard = () => {
  history.push(`/`);
 };

 const _moveBeforeBoard = () => {
  console.log(noticeBeforeData.viewNoticeBoardBeforeId);
  if (noticeBeforeData.viewNoticeBoardBeforeId === null) {
   toast.error("첫번째 글 입니다.");

   return null;
  }
  history.push(noticeBeforeData.viewNoticeBoardBeforeId._id);
 };

 const _moveNextBoard = () => {
  if (noticeNextData.viewNoticeBoardNextId === null) {
   toast.error("마지막 글 입니다.");

   return null;
  }

  history.push(noticeNextData.viewNoticeBoardNextId._id);
 };

 const deleteNotice = async () => {
  const { data } = await deleteNoticeMutation({
   variables: {
    id: noticePageDatum && noticePageDatum.viewNoticeDetail._id,
   },
  });
  if (data.deleteNotice) {
   toast.info("게시글이 삭제되었습니다.");
   noticeRefetch();
   history.push(`/`);
  } else {
   toast.error("잠시 후 다시 시도해주세요.");
  }
 };

 ///////////// - USE EFFECT- ///////////////
 useEffect(() => {
  if (noticeData && noticeData.viewNoticeDetail) {
   let tempData = noticeData.viewNoticeDetail;

   const desc = document.getElementById("notice_description-js");

   if (desc !== null) {
    desc.innerHTML = tempData.description;
    setCurrentData(tempData);
   }
  }
 }, [noticeData]);

 useEffect(() => {
  noticeRefetch();
  noticeNextRefetch();
  noticeBeforeRefetch();
 }, []);

 useTitle(``);

 return (
  <WholeWrapper margin={`150px 0 0 0`}>
   <RsWrapper padding={`100px 0`}>
    <Board_D_title>
     {currentData ? currentData.title : <CircularIndeterminate />}
    </Board_D_title>
    <Board_D dr={`row`}>
     <Board_D_List width={width < 700 ? `100%` : `150px`} bgColor={`#dcdcdc`}>
      작성자
     </Board_D_List>
     <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
      {currentData ? currentData._id : <CircularIndeterminate />}
     </Board_D_List>
     <Board_D_List width={width < 700 ? `100%` : `250px`} bgColor={`#dcdcdc`}>
      작성일
     </Board_D_List>
     <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
      {currentData ? currentData.createdAt : <CircularIndeterminate />}
     </Board_D_List>
    </Board_D>

    <Board_D_Desc>
     <Wrapper id={"notice_description-js"} className={"ql-editor"}></Wrapper>
    </Board_D_Desc>

    <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
     {/** UD 미완성 */}
     <CommonButton
      width={`80px`}
      margin={`0px 10px 0px 0px`}
      onClick={_isDialogOpenToggle}
     >
      수정
     </CommonButton>
     <CommonButton
      width={`80px`}
      margin={`0px 10px 0px 0px`}
      onClick={deleteNotice}
     >
      삭제
     </CommonButton>
     {/** UD 미완성 */}
     <CommonButton
      width={`80px`}
      margin={`0px 10px 0px 0px`}
      onClick={() => _moveListBoard()}
     >
      목록
     </CommonButton>

     <CommonButton
      width={`80px`}
      margin={`0px 10px 0px 0px`}
      onClick={() => _moveBeforeBoard()}
     >
      이전
     </CommonButton>

     <CommonButton
      width={`80px`}
      margin={`0px 10px 0px 0px`}
      onClick={() => _moveNextBoard()}
     >
      다음
     </CommonButton>
    </Wrapper>
    {/* Dialog Area */}
    <Dialog
     onClose={_isDialogOpenToggle}
     aria-labelledby="customized-dialog-title"
     open={isDialogOpen}
     fullWidth={true}
    >
     <DialogTitle
      id="customized-dialog-title"
      onClose={_isDialogOpenToggle}
      // class="dialog_title"
     >
      게시글 수정
     </DialogTitle>
     <DialogContent>
      <Wrapper dr={`row`}>
       제목
       <TextInput
        name="title"
        value={value.title}
        onChange={_valueChangeHandler}
       />
      </Wrapper>
      <Wrapper dr={`row`}>
       내용
       <TextInput
        name="desc"
        value={value.desc}
        onChange={_valueChangeHandler}
       />
      </Wrapper>
     </DialogContent>
     <DialogActions>
      <Button color="primary" onClick={updateNotice}>
       수정
      </Button>
      <Button color="secondary" onClick={_isDialogOpenToggle}>
       취소
      </Button>
     </DialogActions>
    </Dialog>

    {/* Dialog Area */}
   </RsWrapper>
  </WholeWrapper>
 );
});
