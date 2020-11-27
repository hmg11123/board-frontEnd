import styled, { keyframes } from "styled-components";
import { appearAnimation, fullWidth } from "./AnimationCommon";

///////////////////////////////////////////////ADMIN BANNE/////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const BannerImg = styled.div`
 width: 1344px;
 height: ${(props) => props.height || `560px`};
 border: ${(props) => props.theme.border};
 box-shadow: ${(props) => props.theme.boxShadow};
 background-image: url(${(props) => props.imgSource});
 background-size: cover;
 background-position: center;
 margin-bottom: 10px;
 position: relative;
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////ADMIN GRAPH/////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const GraphName = styled.div`
 margin-top: 20px;
`;

export const GraphBar = styled.div`
 width: 100%;
 height: ${(props) => props.height};
 color: ${(props) => props.theme.white_C};
 background: ${(props) => props.theme.adminBasicTheme_C};
 text-align: center;
 padding: 5px;
 text-shadow: 1px 2px 2px rgb(190, 190, 190);
 box-shadow: 7px 3px rgba(0, 0, 0, 0.1);
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////ADMIN TABS/////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const TabSection = styled.div`
 padding: 5px 10px;
 cursor: pointer;
 font-size: 14px;
 position: relative;
 color: ${(props) => (props.isActive ? props.theme.adminBasicTheme_C : ``)};
 font-weight: ${(props) => (props.isActive ? `600` : `400`)};
 &:before {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0px;
  width: ${(props) => (props.isActive ? `100%` : `0%`)};
  height: 100%;
  border-bottom: ${(props) =>
   props.isActive
    ? `1.5px solid  ${props.theme.adminBasicTheme_C}`
    : `1.5px solid  ${props.theme.adminBasicTheme_C}`};
 }
 &:hover:before {
  animation: ${fullWidth} 0.4s forwards;
 }
 &:not(:last-child) {
  margin-right: 10px;
 }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////ADMIN TITLE//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const ContentTitle = styled.div`
 width: 100%;
 height: 30px;
 line-height: 30px;
 color: ${(props) => props.theme.subBlack_C};
 font-size: 17px;
 position: relative;
 z-index: 10;
 font-weight: 600;
 text-shadow: 1px 2px 2px rgb(255, 255, 255);
 margin: ${(props) => props.margin || `0px 0px 30px 0px`};
 &:before {
  opacity: 0.6;
  content: "";
  position: absolute;
  width: 100px;
  height: 20px;
  border-radius: 7px;
  background: ${(props) => props.theme.subTheme_C};
  top: 13px;
  left: 20px;
  z-index: -1;
 }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////Wrapper////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
/** Props List **
 * width        : width
 * height       : height
 * dr           : flex-direction
 * al           : align-items
 * ju           : justify-content
 * bgColor      : background
 * color        : color
 *
 *  */
export const WholeWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 min-width: ${(props) => props.minWidth};
 height: ${(props) => props.height};
 color: ${(props) => props.theme.darkGrey_C};
 display: flex;
 background: ${(props) => props.bgColor};
 color: ${(props) => props.color};
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
 background-image: ${(props) => props.bgImg};
 background-size: cover;
 background-repeat: no-repeat;
 .react-reveal {
  width: 100%;
 }
`;

/** Props List **
 * width        : width
 * height       : height
 * dr           : flex-direction
 * al           : align-items
 * ju           : justify-content
 * bgColor      : background
 * color        : color
 *
 *  */
export const Wrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 min-width: ${(props) => props.minWidth};
 height: ${(props) => props.height};
 min-height: ${(props) => props.minHeight};
 color: ${(props) => props.theme.darkGrey_C};
 display: flex;
 border: ${(props) =>
  props.isBorder ? `1px solid ${props.theme.lightGrey_C}` : ``};
 border-radius: ${(props) => (props.isBorder ? props.theme.radius : ``)};
 box-shadow: ${(props) => (props.isBorder ? props.theme.boxShadow : ``)};
 background: ${(props) => props.bgColor};
 background-color: ${(props) => (props.isSearchBox ? props.theme.grey_C : ``)};
 box-shadow: ${(props) => props.shadow};
 color: ${(props) => props.color};
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 border-bottom: ${(props) => (props.isTab ? props.theme.border : ``)};
 overflow: ${(props) => props.overflow};
 font-size: ${(props) => props.size};
 transition: ${(props) => props.theme.transition};
 overflow: ${(props) => (props.isScroll ? `auto` : ``)};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
 background-image: ${(props) => props.bgImg};
 background-size: cover;
 background-repeat: no-repeat;
 cursor: ${(props) => (props.pointer ? `pointer` : ``)};

 &:hover {
  border: ${(props) =>
   props.pointer ? `1px solid ${props.theme.subBlack_C}` : ``};
 }

 & svg {
  cursor: pointer;
 }
 & svg:hover {
  color: ${(props) => props.theme.adminBasicTheme_C};
 }

 & .react-reveal {
  width: 100%;
 }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////Input/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const InputContent = styled.div`
 width: ${(props) => props.width || `100px`};
 height: 25px;
 line-height: 25px;
 color: ${(props) => props.theme.subBlack_C};
 font-size: 14px;
 position: relative;
 z-index: 10;
 font-weight: 600;
 text-shadow: 1px 2px 2px rgb(255, 255, 255);
 margin: ${(props) => props.margin || ``};
 &:before {
  opacity: 0.5;
  content: "";
  position: absolute;
  width: 50%;
  height: 10px;
  border-radius: 7px;
  background: ${(props) => props.theme.subTheme_C};
  top: 13px;
  left: 20px;
  z-index: -1;
 }
`;

export const Content = styled.div`
 width: ${(props) => props.width || `100px`};
 height: 25px;
 line-height: 25px;
 color: ${(props) => props.theme.subBlack_C};
 font-size: 14px;
 position: relative;
 z-index: 10;
 font-weight: 600;
 text-shadow: 1px 2px 2px rgb(255, 255, 255);
 margin: ${(props) => props.margin || ``};
 &:before {
  opacity: 0.2;
  content: "";
  position: absolute;
  width: 100px;
  height: 20px;
  border-radius: 7px;
  background: ${(props) => props.theme.adminBasicTheme_C};
  top: 13px;
  left: 20px;
  z-index: -1;
 }
`;

export const InfoText = styled.div`
 width: ${(props) => props.width || `100px`};
 height: ${(props) => props.height || `25px`};
 line-height: ${(props) => props.height || `25px`};
 font-size: 15px;
 color: ${(props) =>
  props.isSearchBox ? props.theme.white_C : props.theme.darkGrey_C};
 margin-right: 20px;
 font-weight: ${(props) => (props.weight ? `600` : ``)};
`;

export const Combo = styled.select`
 width: ${(props) => props.width || `100px`};
 height: ${(props) => props.height || `30px`};
 border: ${(props) => props.theme.border};
 border-radius: ${(props) => props.theme.radius};
 margin: ${(props) => props.margin};
 outline: none;
 transform: ${(props) => props.theme.transition};
 &:focus {
  box-shadow: ${(props) => props.theme.boxShadow};
 }
`;

export const ComboOption = styled.option``;

export const FormAction = styled.form``;

export const FileInput = styled.input`
 display: none;
`;

export const FileViewr = styled.input`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `25px`};
 border: ${(props) => props.theme.border};
 border-radius: ${(props) => props.theme.radius};
 padding: ${(props) => props.theme.inputPadding};
 margin-right: 10px;
`;

export const FileViewrNoneMargin = styled.input`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `25px`};
 border: ${(props) => props.theme.border};
 border-radius: ${(props) => props.theme.radius};
 padding: ${(props) => props.theme.inputPadding};
`;

export const FileLabel = styled.label`
 display: block;
 width: ${(props) => props.width || `100px`};
 height: ${(props) => props.height || `25px`};
 text-align: center;
 line-height: ${(props) => props.height || `28px`};
 background-color: ${(props) => props.theme.check_B_C};
 background-color: ${(props) => props.bgColor};
 color: ${(props) => props.theme.white_C};
 border-radius: ${(props) => props.theme.radius};
 cursor: pointer;
 transition: 0.4s;
 margin: ${(props) => props.margin};
 font-size: 13.5px;
 &:hover {
  background-color: ${(props) => props.theme.white_C};
  color: ${(props) => props.theme.update_B_C};
  border: 1px solid ${(props) => props.theme.check_B_C};
 }
`;

/** Props List **
 * width            : width [required]
 * height           : height
 * transition       : transition
 * margin           : margin
 *  */
export const TextInput = styled.input`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `30px`};
 border: ${(props) => props.theme.border};
 padding: ${(props) => props.theme.inputPadding};
 border-radius: ${(props) => props.theme.radius};
 transition: ${(props) => props.transition || props.theme.transition};
 margin: ${(props) => props.margin};

 &:focus {
  box-shadow: ${(props) => props.theme.boxShadow};
 }
`;

export const CheckInput = styled.input``;

export const Textarea = styled.textarea`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `30px`};
 border: ${(props) => props.theme.border};
 padding: ${(props) => props.theme.textPadding};
 border-radius: ${(props) => props.theme.radius};
 transition: ${(props) => props.transition || props.theme.transition};
 margin: ${(props) => props.margin};
 resize: none;
 &:focus {
  box-shadow: ${(props) => props.theme.boxShadow};
 }
`;

export const TextInputSubject = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `30px`};
 line-height: ${(props) => props.height || `30px`};
 border-bottom: ${(props) => props.theme.border};
 transition: ${(props) => props.transition || props.theme.transition};
 margin: ${(props) => props.margin};
 color: ${(props) => props.theme.darkGrey_C};
 font-size: ${(props) => props.size};
 margin-right: 20px;
`;

/** Props List **
 * width            : width [required]
 * kindOf           : [check, create, update, delete] [required]
 * height           : height
 * transition       : transition
 * margin           : margin
 * padding          : padding
 *  */
export const CommonButton = styled.button`
 width: ${(props) => props.width};
 min-width: ${(props) => props.width || `100px`};
 height: ${(props) => props.height || `30px`};
 transition: ${(props) => props.transition || props.theme.transition};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
 border-radius: ${(props) => props.theme.radius};
 color: #fff;
 ${(props) => !props.kindOf && `background : ${props.theme.adminBasicTheme_C};`}
 ${(props) =>
  props.kindOf === `create` && `background : ${props.theme.create_B_C};`}
  ${(props) =>
  props.kindOf === `check` && `background : ${props.theme.check_B_C};`}
  ${(props) =>
  props.kindOf === `update` && `background : ${props.theme.update_B_C};`}
  ${(props) =>
  props.kindOf === `delete` && `background : ${props.theme.delete_B_C};`}
  &:hover {
  background: #fff;
  color: ${(props) => props.theme.darkGrey_C};
  box-shadow: ${(props) => props.theme.boxShadow};
  ${(props) =>
   !props.kindOf && `border :1px solid ${props.theme.adminBasicTheme_C};`}
  ${(props) =>
   props.kindOf === `create` && `border :1px solid ${props.theme.create_B_C};`}
    ${(props) =>
   props.kindOf === `check` && `border :1px solid ${props.theme.check_B_C};`}
    ${(props) =>
   props.kindOf === `update` && `border :1px solid ${props.theme.update_B_C};`}
    ${(props) =>
   props.kindOf === `delete` && `border :1px solid ${props.theme.delete_B_C};`}
 }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////Table/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
export const TableWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 min-width: ${(props) => props.width};
 height: ${(props) => props.height};
 line-height: ${(props) => props.lineHeight || `26px`};
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 font-weight: ${(props) => (props.isActive ? `600` : ``)};
 background-color: ${(props) =>
  props.isDelete
   ? `rgba(224, 0, 0, 0.5) `
   : props.isActive
   ? ` rgba(0, 0, 0, 0.1)`
   : ``};
 margin-bottom: ${(props) => props.marginBottom};
 margin: ${(props) => props.margin};
 color: ${(props) =>
  props.isData ? props.theme.subBlack_C : props.theme.white_C};
 border-bottom: ${(props) => (props.isData ? props.theme.border : ``)};
 cursor: ${(props) => props.isData && `pointer`};
 transition: ${(props) => props.theme.transition};
 &:hover {
  background: ${(props) => props.isData && props.theme.grey_C};
  color: ${(props) => props.isData && props.theme.white_C};
 }

 ${(props) =>
  props.isSelect
   ? `  
  font-weight: 700;`
   : ``}
`;

export const TableHeadColumn = styled.div`
 width: ${(props) => props.width};
 min-width: ${(props) => props.minWidth};
 height: 100%;
 line-height: ${(props) => props.lineHeight};
 text-align: center;
 height: ${(props) => props.height};
 box-shadow: ${(props) => (props.isData ? `` : props.theme.boxShadowV2)};
 background: ${(props) => (props.isData ? `` : props.theme.subBlack_C)};
 border-radius: ${(props) => props.theme.tableRadius};
 font-size: 13px;
 font-weight: ${(props) => props.isToday && `700`};
 color: ${(props) =>
  props.isToday ? props.theme.adminBasicTheme_C : props.color};
 ${(props) =>
  props.isSvg
   ? `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & svg {
      margin : 0px 3px;
    }
  `
   : ``}
 &:not(:last-child) {
  margin-right: 1.5px;
 }
 & svg {
  font-size: 16px;
  color: ${(props) => props.svgColor};
 }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////Menu//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
export const SideMenu = styled.div`
 width: 100%;
 height: 30px;
 line-height: 30px;
 color: ${(props) => (props.isActive ? props.theme.adminBasicTheme_C : `#fff`)};
 font-weight: 600;
 margin-bottom: 5px;
 padding: 5px;
 cursor: pointer;
 transition: ${(props) => props.theme.transition};
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 border-bottom: 1px solid ${(props) => props.theme.darkGrey_C};
 &:hover {
  background: ${(props) => props.theme.darkGrey_C};
  border-radius: ${(props) => props.theme.radius};
 }
 ${(props) =>
  props.isActive
   ? ` & svg {
    color: ${(props) => props.theme.white_C};
    font-size: 20px;
    transform: rotate(180deg);
  }`
   : ` & svg {
    color: ${(props) => props.theme.white_C};
    font-size: 20px;
  }`}
`;

/** Props List **
 * isActive     : display
 *
 *  */
export const SubMenus = styled.ul`
 width: 100%;
 display: ${(props) => (props.isActive ? `block` : `none`)};
 color: ${(props) => props.theme.white_C};
 font-size: 14px;
 padding: 10px;
 transition: ${(props) => props.theme.transition};
 animation: ${appearAnimation} 1s forwards;
`;

export const SubMenu = styled.li`
 width: 100%;
 height: 25px;
 cursor: pointer;
 transition: ${(props) => props.theme.transition};
 &:not(:last-child) {
  margin-bottom: 10px;
 }
 &:hover {
  font-weight: 600;
  color: ${(props) => props.theme.adminHoverTxt_C};
 }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////|/////////////////////////////////////////////////////////////

////////////////////////////////////////////////GUIDE//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
export const GuideBox = styled.ul`
 width: ${(props) => props.width || `100%`};
 min-width: ${(props) => props.minWidth};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
 font-size: 12.5px;
 color: ${(props) => props.theme.darkGrey_C};
 font-weight: 600;
 background: ${(props) => props.theme.lightGrey_C};
 border-radius: ${(props) => props.theme.radius};
`;

export const GuideContent = styled.li`
 width: ${(props) => props.width || `100%`};
 min-width: ${(props) => props.minWidth};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
`;

export const StatusText = styled.div`
 color: ${(props) =>
  props.status ? props.theme.delete_B_C : props.theme.update_B_C};
`;

export const DescText = styled.div``;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////PAGENATION//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const PagenationWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 min-width: ${(props) => props.minWidth};
 height: ${(props) => props.height};
 color: ${(props) => props.color};
 display: flex;
 flex-direction: ${(props) => props.dr || `row`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 background: ${(props) => props.bgColor};
 color: ${(props) => props.color};
 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-radius: ${(props) => props.radius};
 box-shadow: ${(props) => props.shadow};
 font-size: ${(props) => props.fontSize};
 font-weight: ${(props) => props.fontWeight};
 margin: ${(props) => props.margin || `20px 0px 0px`};
 padding: ${(props) => props.padding};
`;

export const Pagenation = styled.div`
 width: 25px;
 height: 25px;
 display: flex;
 flex-direction: ${(props) => props.dr || `row`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 cursor: pointer;
 padding-top: 3px;

 &.active {
  background-color: ${(props) => props.theme.subBlack_C};
  color: ${(props) => props.theme.white_C};
  border-radius: 4px;
 }
`;

export const PagenationBtn = styled.div`
 text-align: center;
 font-size: 18px;
 width: 25px;
 height: 25px;
 color: ${(props) => props.theme.grey_C};
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 border-radius: 4px;
 margin: 0px 3px;

 &:first-child,
 &:last-child {
  background-color: ${(props) => props.theme.subBlack_C};
  color: ${(props) => props.theme.white_C};
 }

 &:hover {
  color: ${(props) => props.theme.darkGrey_C};
 }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
