import styled from "styled-components";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

export const ContainerPrincipal = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 40px;

  .slick-prev::before,
  .slick-next::before,
  .ant-carousel .slick-prev,
  .ant-carousel .slick-next {
    color: #ffe712 !important;
    font-size: 35px !important;
  }

  .slick-prev {
    left: -45px !important;
    z-index: 1;
  }

  .slick-next {
    right: -45px !important;
    z-index: 1;
  }

  .ant-table-thead > tr > th {
    background-color: #ffe712 !important;
    color: #000 !important;
    font-weight: bold !important;
    border-bottom: none !important;
  }

  .ant-table-tbody > tr > td {
    background-color: #333333 !important;
    border-bottom: 1px solid #555 !important;
  }

  .ant-table {
    border-radius: 15px;
    overflow: hidden;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  text-align: center;
`;

export const SlideBox = styled.div`
  height: 250px;
  background-color: #f5f5f5;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 24px;
  font-weight: bold;
`;

export const BotaoContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: flex-end;
`;

export const ActionButton = styled(Button)`
  border-color: #ffe712 !important;
  color: #ffe712 !important;
  border-radius: 15px;
  padding: 0 25px;
  border: 1px solid #ffe712 !important;
  background-color: transparent !important;

  &:hover {
    border-color: #ffd700 !important;
    color: #ffd700 !important;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 700px;
`;

export const MemberName = styled.div`
  font-weight: bold;
  color: #fff;
`;

export const MemberRole = styled.div`
  color: #ffe712;
  font-size: 12px;
`;

export const StatusChip = styled.span`
  border: 1px solid #ffe712;
  border-radius: 15px;
  padding: 4px 15px;
  color: #ffe712;
`;

export const DeleteActionIcon = styled(DeleteOutlined)`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;
