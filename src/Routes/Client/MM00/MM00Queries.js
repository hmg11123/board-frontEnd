import { gql } from "apollo-boost";

export const VIEW_NOTICE = gql`
 query viewNotice($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  viewNotice(
   searchValue: $searchValue
   limit: $limit
   currentPage: $currentPage
  ) {
   _id
   title
   description
   createdAt
  }
 }
`;

export const VIEW_ALL_NOTICE = gql`
 query viewAllNotice($searchValue: String!) {
  viewAllNotice(searchValue: $searchValue)
 }
`;

export const VIEW_NOTICE_DETAIL = gql`
 query viewNoticeDetail($id: String!) {
  viewNoticeDetail(id: $id) {
   _id
   title
   description
   createdAt
  }
 }
`;

export const VIEW_NOTICE_TOTAL_PAGE = gql`
 query viewNoticeBoardTotalPage($limit: Int!, $searchValue: String!) {
  viewNoticeBoardTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;

export const VIEW_NOTICE_BEFORE_ID = gql`
 query viewNoticeBoardBeforeId($id: String!) {
  viewNoticeBoardBeforeId(id: $id) {
   _id
  }
 }
`;

export const VIEW_NOTICE_NEXT_ID = gql`
 query viewNoticeBoardNextId($id: String!) {
  viewNoticeBoardNextId(id: $id) {
   _id
  }
 }
`;

export const CREATE_NOTICE = gql`
 mutation createNotice($title: String!, $description: String!) {
  createNotice(
   title: $title
   description: $description
   userId: "5fbf1da37f2dc780b7f5763b"
  )
 }
`;

export const DELETE_NOTICE = gql`
 mutation deleteNotice($id: String!) {
  deleteNotice(id: $id)
 }
`;

export const UPDATE_NOTICE = gql`
 mutation updateNotice($id: String!, $title: String!, $description: String!) {
  updateNotice(id: $id, title: $title, description: $description)
 }
`;
