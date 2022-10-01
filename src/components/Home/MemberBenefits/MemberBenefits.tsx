import { Col, Container, Row } from "react-bootstrap";
import { BsTable } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { FaScroll } from "react-icons/fa";
import { RiVipFill } from "react-icons/ri";
import { CardsTable } from "./CardsTable/CardsTable";
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import ArchitectureTwoToneIcon from '@mui/icons-material/ArchitectureTwoTone';
import BalanceTwoToneIcon from '@mui/icons-material/BalanceTwoTone';
import FormatAlignCenterTwoToneIcon from '@mui/icons-material/FormatAlignCenterTwoTone';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import {Gear} from '@rsuite/icons';
import ExploreIcon from '@rsuite/icons/Explore';
import GlobalIcon from '@rsuite/icons/Global';
import HistoryIcon from '@rsuite/icons/History';
import DraftRoundIcon from '@rsuite/icons/DraftRound';
import RelatedMapIcon from '@rsuite/icons/RelatedMap';
import Scales from "../../../Icons/scale.svg";

import "./MemberBenefits.css";

const benefits = [
  {
    children: <ExploreIcon spin style={{ fontSize: "1em"}} />,
    title: "PUBLIC DIRECTORY",
    text: "Meet our trailblazers. The featured lawyers are knowledgeable and tech-savvy, capable of providing world-class legal advice due to their qualifications and experience in advising Web3 companies and professionals."
  },
  {
    children: <Gear spin style={{fontSize: "1em"}}/>,
    title: "PROJECT MANAGEMENT TOOL",
    text: "Freely collaborate and manage international projects through a Web3-native project management tool."
  },
  {
    children: <RelatedMapIcon spin style={{fontSize: "1em"}}/>,
    title: "FREE ADVICE POLICY",
    text: "Contact other members for straightforward legal advice."
  },
  {
    children: <GlobalIcon spin style={{fontSize: "1em"}}/>,
    title: "MEMBERS-ONLY DISCORD",
    text: "Be a part of ongoing discussions on current news and trends and make personal connections with other members."
  },
  {
    children: <DraftRoundIcon spin style={{fontSize: "1em"}}/>,
    title: "OPINION PIECES",
    text: "Write opinion articles on specialized media outlets and in our online newsletter."
  },
  {
    children: <HistoryIcon spin style={{fontSize: "1em"}} />,
    title: "EVENTS",
    text: "Attend our members-only seminars and conferences and benefit from our guidelines and informative materials on legal developments. Share knowledge and business experiences, but, most importantly, connect."
  },
]

export const MemberBenefits = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h3 className="mb-title">Member Benefits</h3>
            <CardsTable cards={benefits} />
            <div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}