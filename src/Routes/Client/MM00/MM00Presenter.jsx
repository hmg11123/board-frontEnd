import React from "react";
import {
    RsWrapper,
    WholeWrapper,
    Wrapper,
    Image,
  } from "../../../Components/CommonComponents";
import withSplitting from "../../../Lib/withSplitting";
import { withResizeDetector } from "react-resize-detector";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";


const MM00Presenter = ({mainBannerData}) => {
    return(
        <div>
            {mainBannerData ? (
              mainBannerData.length === 0 ? (
              <div>
                공지사항이 없습니다.
              </div>
              ) : (
                mainBannerData.map((data, idx) => {
                  return (
                      <div>
                              {data.title}
                              {data.createdAt.slice(0, 13)}
                      </div>

                  );
                })
              )
            ) : (
              <CircularIndeterminate />
            )}
        </div>
    )
}

export default withResizeDetector(MM00Presenter);
