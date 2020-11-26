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
