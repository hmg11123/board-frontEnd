import { gql } from "apollo-boost";

export const VIEW_NOTICE = gql`
 query viewNotice {
  viewNotice {
   title
   description
   createdAt
  }
 }
`;
export const GET_NOTICEBOARD_DETAIL = gql`
 query getNoticeBoardDetail($id: String!) {
  getNoticeBoardDetail(id: $id) {
   _id
   title
   createdAt
   description
  }
 }
`;

export const GET_NOTICEBOARD_NEXT_ID = gql`
 query getNoticeBoardNextId($id: String!) {
  getNoticeBoardNextId(id: $id) {
   _id
  }
 }
`;

export const GET_NOTICEBOARD_BEFORE_ID = gql`
 query getNoticeBoardBeforeId($id: String!) {
  getNoticeBoardBeforeId(id: $id) {
   _id
  }
 }
`;

export const CREATE_NOTICE = gql`
 mutation createNotice($title: String!, $description: String!) {
  createNotice(title: $title, description: $description) {
   _id
   title
   createdAt
   description
   author
  }
 }
`;

export const DELETE_NOTICE = gql`
 mutation deleteNotice($id: ID!) {
  deleteNotice(_id: $id) {
   _id
  }
 }
`;

export const UPDATE_NOTICE = gql`
 mutation updateNotice($title: String!, $description: String!) {
  updateNotice(title: $title, description: $description) {
   title
   description
  }
 }
`;
