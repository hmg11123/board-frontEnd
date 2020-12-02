import { gql } from "apollo-boost";

export const VIEW_NOTICE = gql`
 query viewNotice {
  viewNotice {
   _id
   title
   description
   createdAt
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
