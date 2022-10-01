import { 
  useReactTable, 
  getCoreRowModel, flexRender, ColumnDef, Row as row, getExpandedRowModel
} from "@tanstack/react-table";
import { Fragment, ReactNode, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import * as countriesArr from './../../../../utils/countriesAndFlags.json';
import "./TableComponent.css";

type ContactDetails = {
  email: string,
  phoneNumber: number,
  linkedIn: string,
  twitter?: string
}

type TableEntry = {
  jurisdiction: string,
  name: string,
  bio?: string,
  expertiseAreas?: string[],
  contactDetails?: ContactDetails,
  photo: string,
  expander?: any
}

const defaultData: TableEntry[] = [
  {
    jurisdiction: 'Portugal',
    name: 'Miguel Dinis Lucas',
    bio: `I am a Portuguese qualified lawyer well versed in the venture capital ecosystem. In Portugal, I worked for three years at Morais Leitão's Team Genesis and co-lectured the "Startup Lifecycle" module in the Law and Tech Masters at Universidade Nova de Lisboa's Law Faculty. Recently, I joined Taylor Wessing's renowned Corporate Technology Team in London (ranked tier 1 in venture capital in the UK).

My practice focuses on advising investors and emerging/high-growth companies throughout their lifecycle, notably in financing rounds, mergers and acquisitions and joint ventures.
    
Furthermore, I have a preeminent understanding of the Web3 space and relevant experience assisting companies and individuals in the sector.
    
In September 2022 I co-founded Blockchain Lawyers Group, a global network of legal experts in blockchain related matters.`,
    expertiseAreas: ["Corporate", "Venture Capital", "Tax", "Immigration"],
    contactDetails: {
      email: "miguel.lucas9@gmail.com",
      phoneNumber: 961277040,
      linkedIn: "https://www.linkedin.com/in/migueldinislucas-lawyer",
      twitter: "https://twitter.com/MDLawyer_"
    },
    photo: "https://i.ibb.co/HphZCRT/miguel-lucas.jpg",
  },
  {
    jurisdiction: 'Canada, Alberta',
    name: 'John Smith',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    expertiseAreas: ["add", "credentials", "here"],
    contactDetails: {
      email: "mail@mail.com",
      phoneNumber: 12345,
      linkedIn: "https://www.linkedin.com/in/migueldinislucas-lawyer"
    },
    photo: "https://image.shutterstock.com/image-vector/picture-profile-icon-human-people-260nw-1011304363.jpg",
  },
  {
    jurisdiction: 'Spain',
    name: 'Jane Smith',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    expertiseAreas: ["add", "credentials", "here"],
    contactDetails: {
      email: "mail@mail.com",
      phoneNumber: 12345,
      linkedIn: "https://www.linkedin.com/in/migueldinislucas-lawyer"
    },
    photo: "https://image.shutterstock.com/image-vector/picture-profile-icon-human-people-260nw-1011304363.jpg",
  },
]

type TableProps<TData> = {
  data: TData[]
  columns: ColumnDef<TData>[]
  renderSubComponent: (props: { row: row<TData> }) => React.ReactElement
  getRowCanExpand: (row: row<TData>) => boolean
}

function Table({
  data,
  columns,
  renderSubComponent,
  getRowCanExpand,
}: TableProps<TableEntry>): JSX.Element {
  const table = useReactTable<TableEntry>({
    data,
    columns,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel()
  })

  return (
    <div>
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, idx) => {
                const width = idx === 0 ? '25%' : idx === 1 ? '40%' : 'auto';
                return (
                  <th 
                    {...{
                      key: header.id,
                      colSpan: header.colSpan,
                      style: {
                        width: width
                      }
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <Fragment key={row.id}>
                <tr>
                  {/* first row is a normal row */}
                  {row.getVisibleCells().map((cell, idx) => {
                    const width = idx === 0 ? '25%' : idx === 1 ? '40%' : 'auto';
                    return (
                      <td 
                        {...{
                          key: cell.id,
                          style: {
                            width: width
                          }
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
                {row.getIsExpanded() && (
                  <tr>
                    {/* 2nd row is a custom 1 cell row */}
                    <td colSpan={row.getVisibleCells().length}>
                      {renderSubComponent({ row })}
                    </td>
                  </tr>
                )}
              </Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const renderSubComponent = ({ row }: { row: row<TableEntry> }) => {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <p>Areas of Expertise:</p>
          <ul className="expertise-areas-ul">
            {row.original.expertiseAreas?.map((e) => {
              return <li className="expertise-areas-li">{e}</li>
            })}
          </ul>
        </Col>
        <Col sm={5}>
          <p className="bio-p">{row.original.bio}</p>
        </Col>
        <Col sm={4} className="padding-0-imp">
          <ul className="expertise-areas-ul">
            <li className="expertise-areas-li">{row.original.contactDetails?.email}</li>
            <li className="expertise-areas-li">{row.original.contactDetails?.phoneNumber}</li>
            {row.original.contactDetails?.linkedIn && <a href={row.original.contactDetails?.linkedIn} target="_blank" rel="noreferrer" className="table-socials"><BsLinkedin /></a>}
            {row.original.contactDetails?.twitter && <a href={row.original.contactDetails?.twitter} target="_blank" rel="noreferrer" className="table-socials"><BsTwitter /></a>}
          </ul>
          
        </Col>
      </Row>
    </Container>
  )
}

const columns: ColumnDef<TableEntry>[] = [
  {
    accessorKey: 'jurisdiction',
    header: () => {
      return (
        <Container>
          <Row>
            <Col>
              <p className="table-column-title">Jurisdiction</p>
            </Col>
          </Row>
        </Container>
      );
    },
    cell: (info) => {
      let country: string = '';
      if((info.getValue() as string).includes(',')){
        country = (info.getValue() as string).split(',')[0];
      } else {
        country = (info.getValue() as string);
      }
      console.log(country);
      const flag = countriesArr[country as keyof typeof countriesArr];
      console.log(flag);
      return (
        <Container>
          <Row>
            <Col>
            <p>
              <span className="table-column-title">{info.getValue() as ReactNode}</span>
            </p>
            </Col>
          </Row>
        </Container>
      );
    }
  },
  {
    accessorKey: 'name',
    header: () => {
      return (
        <Container>
          <Row>
            <Col>
              <p className="table-column-title">Name</p>
            </Col>
          </Row>
        </Container>
      );
    },
    cell: (info) => {
      return (
        <Container>
          <Row>
            <Col>
              {<p className="table-column-title">{info.getValue() as ReactNode}</p>}
            </Col>
          </Row>
        </Container>
      );
    }
  },
  {
    accessorKey: 'photo',
    header: () => {
      return (
        <Container>
          <Row>
            <Col>
              <p className="table-column-title">Photo</p>
            </Col>
          </Row>
        </Container>
      );
    },
    cell: (info) => {
      console.log(info);
      return (
        <Container>
          <Row>
            <Col>
              {<img height={34} src={info.getValue() as string} alt={info.row.original.name}/>}
            </Col>
          </Row>
        </Container>
      );
    }
  },
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <button style={{borderRadius: "100%"}} className="table-expand-button"
          {...{
            onClick: row.getToggleExpandedHandler()
          }}
        >
          <MdOutlineKeyboardArrowUp style={{width: "100%", height: "100%", marginBottom: "35px"}} className={row.getIsExpanded() ? "active": ""}/>
        </button>
      ) : (
        ''
      )
    },
  }
]

export const TableComponent = () => {
  const [data] = useState(() => [...defaultData]);

  return (
    <Table
      data={data}
      columns={columns}
      getRowCanExpand={() => true}
      renderSubComponent={renderSubComponent}
    />
  )
}