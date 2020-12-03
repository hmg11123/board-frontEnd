import React from "react";
import {
 EmptyList,
 SearchWrapper,
 TableBody,
 TableBodyLIST,
 TableWrapper,
 Wrapper,
 WholeWrapper,
 TextInput,
 TableHead,
 TableHeadLIST,
 PagenationWrapper,
 PagenationBtn,
 Pagenation,
 MobileTable,
 MobileTableWrapper,
 RsWrapper,
 CommonButton,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import withSplitting from "../../../Lib/withSplitting";
import { withResizeDetector } from "react-resize-detector";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const SearchInput = styled(TextInput)`
 position: relative;
 border: 1px solid #dcdcdc;
 border-radius: 2px;
 margin-right: 4px;

 &:hover ${SearchWrapper2} {
  opacity: 1;
  box-shadow: 0px 3px 5px solid #eee;
 }

 &:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
 }
`;

const SearchWrapper2 = styled(Wrapper)`
 position: relative;
 color: #fff;
 border-radius: 2px;
 cursor: pointer;

 &:hover {
  border: 1px solid rgb(67, 66, 88);
  background: none;
  color: rgb(67, 66, 88);
 }

 & svg {
  position: absolute;
  top: 5px;

  font-size: 18px;
 }

 &:hover svg {
  animation: ${SearchWrapper2} 0.5s forwards;
 }
`;
const MM00Presenter = ({
 width,
 //
 currentPage,
 limit,
 pages,
 inputSearch,
 //
 noticePageDatum,
 totalCnt,
 //
 moveLinkHandler,
 prevAndNextPageChangeNoticeHandler,
 changePageHandler,
 _isDialogOpenToggle,
 isDialogOpen,
 _valueChangeHandler,
 valueTitle,
 valueDesc,
 addNotice,
}) => {
 return (
  <WholeWrapper>
   <RsWrapper padding={`100px 0px`}>
    <Wrapper
     dr={`row`}
     al={`flex-start`}
     ju={`flex-start`}
     padding={`10px 0px`}
    >
     <SearchWrapper width={`auto`} dr={`row`}>
      <SearchInput
       type="text"
       width={`200px`}
       padding={`0px 5px 0px 5px`}
       placeholder="Search"
       // onKeyDown={(e) =>
       //   e.keyCode === 13 && changeSearchValueHandler()
       // }
       // {...inputSearchValue}
      />
     </SearchWrapper>
     <SearchWrapper2
      width={`30px`}
      height={`30px`}
      bgColor={`rgb(67, 66, 88)`}
      // onClick={changeSearchValueHandler}
     >
      <FaSearch />
     </SearchWrapper2>
    </Wrapper>

    <Wrapper dr={`row`}>
     <CommonButton
      width={`80px`}
      margin={`0px 10px 0px 0px`}
      onClick={_isDialogOpenToggle}
     >
      추가
     </CommonButton>
    </Wrapper>
    <TableWrapper>
     <TableHead>
      <TableHeadLIST width={`100px`}>번호</TableHeadLIST>
      <TableHeadLIST
       fontWeight={`800`}
       width={`calc(100% - 100px - 160px - 100px)`}
       ju={`flex-start`}
      >
       제목
      </TableHeadLIST>
      <TableHeadLIST width={`160px`}>이름</TableHeadLIST>
      <TableHeadLIST width={`100px`}>작성일</TableHeadLIST>
     </TableHead>

     {noticePageDatum ? (
      noticePageDatum.length === 0 ? (
       <EmptyList>등록된 게시글이 없습니다.</EmptyList>
      ) : (
       noticePageDatum.map((data, idx) => {
        return (
         <TableBody key={idx} onClick={() => moveLinkHandler(data._id)}>
          <TableBodyLIST width={`100px`}>
           {totalCnt + (currentPage * limit + idx) + ""}
          </TableBodyLIST>
          <TableBodyLIST
           fontWeight={`800`}
           width={`calc(100% - 100px - 160px - 100px)`}
           ju={`flex-start`}
          >
           {data && data.title.length > 90
            ? data.title.substring(0, 90) + `…`
            : data.title}
          </TableBodyLIST>
          <TableBodyLIST width={`160px`}>관리자</TableBodyLIST>
          <TableBodyLIST width={`100px`}>
           {data.createdAt.substring(0, 10)}
          </TableBodyLIST>
         </TableBody>
        );
       })
      )
     ) : (
      <CircularIndeterminate />
     )}
    </TableWrapper>

    <MobileTable>
     {noticePageDatum ? (
      noticePageDatum.length === 0 ? (
       <EmptyList>등록된 게시글이 없습니다.</EmptyList>
      ) : (
       noticePageDatum.map((data, idx) => {
        return (
         <MobileTableWrapper key={idx}>
          <TableBody onClick={() => moveLinkHandler(data._id)}>
           <TableBodyLIST fontWeight={`800`} width={`100%`} ju={`flex-start`}>
            {data && data.title.length > 90
             ? data.title.substring(0, 90) + `…`
             : data.title}
           </TableBodyLIST>
          </TableBody>

          <TableBody>
           <TableBodyLIST ju={`flex-start`} width={`calc(100% / 2)`}>
            <FaUserCircle /> 관리자
           </TableBodyLIST>
           <TableBodyLIST ju={`flex-start`} width={`calc(100% / 2)`}>
            <MdDateRange />
            {data.createdAt.substring(0, 10)}
           </TableBodyLIST>
          </TableBody>
         </MobileTableWrapper>
        );
       })
      )
     ) : (
      <CircularIndeterminate />
     )}
    </MobileTable>
    <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
     {pages && pages.length > 0 && (
      <PagenationWrapper width={`auto`}>
       <PagenationBtn
        onClick={() =>
         noticePageDatum && prevAndNextPageChangeNoticeHandler(currentPage - 1)
        }
       >
        <IoIosArrowBack />
       </PagenationBtn>
       {pages.map((data) => {
        return (
         <Pagenation
          className={data === currentPage ? `active` : ``}
          key={data}
          onClick={() => changePageHandler(data)}
         >
          {data + 1}
         </Pagenation>
        );
       })}
       <PagenationBtn
        onClick={() =>
         noticePageDatum && prevAndNextPageChangeNoticeHandler(currentPage + 1)
        }
       >
        <IoIosArrowForward />
       </PagenationBtn>
      </PagenationWrapper>
     )}
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
      게시글 추가
     </DialogTitle>
     <DialogContent>
      <Wrapper dr={`row`}>
       제목
       <TextInput
        name="title"
        value={valueTitle}
        onChange={_valueChangeHandler}
       />
      </Wrapper>
      <Wrapper dr={`row`}>
       내용
       <TextInput
        name="desc"
        value={valueDesc}
        onChange={_valueChangeHandler}
       />
      </Wrapper>
     </DialogContent>
     <DialogActions>
      <Button color="primary" onClick={addNotice}>
       보내기
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
};

export default withResizeDetector(MM00Presenter);
