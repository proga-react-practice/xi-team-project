import { CHECK_AND_RADIO, RANGE } from "../data";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

export interface ICardData {
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
}

interface ICardsProps {
  cards: ICardData[];
  onDelete: (index: number) => void;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cards({ cards, onDelete }: ICardsProps) {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: 700,
                "& .MuiTableCell-root": {
                  textAlign: "center",
                  fontSize: "1em",
                },
              }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  {CHECK_AND_RADIO.map((item, index) => (
                    <StyledTableCell key={index}>{item.label}</StyledTableCell>
                  ))}
                  <StyledTableCell>{RANGE[0].label}</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    {card.levelOfAI.map((level, levelIndex) => (
                      <Chip
                        key={levelIndex}
                        label={level}
                        variant="outlined"
                        sx={{
                          mr: 1,
                          mb: 1,
                          borderRadius: 1,
                          fontSize: "1.2em",
                          textAlign: "center",
                        }}
                      />
                    ))}
                  </StyledTableCell>
                  <StyledTableCell>
                    {card.whereAIIsUsed.map((use, useIndex) => (
                      <Chip
                        key={useIndex}
                        label={use}
                        variant="outlined"
                        sx={{
                          mr: 1,
                          mb: 1,
                          borderRadius: 1,
                          fontSize: "1.2em",
                          textAlign: "center",
                        }}
                      />
                    ))}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Chip
                      label={card.TypeOfAI}
                      variant="outlined"
                      sx={{
                        borderRadius: 1,
                        fontSize: "1.2em",
                        textAlign: "center",
                      }}
                    />
                  </StyledTableCell>
                  <StyledTableCell>{card.rateAIIntelligence}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="outlined"
            endIcon={<ClearIcon />}
            onClick={() => onDelete(index)}
            sx={{
              borderRadius: "8px",
              border: "1px solid transparent",
              padding: "0.6em 1.2em",
              fontSize: "1em",
              fontWeight: "500",
              fontFamily: "inherit",
              cursor: "pointer",
              transition: "border-color 0.25s",
              "&:hover": {
                borderColor: "#646cff",
              },
              "&:focus": {
                outline: "4px auto -webkit-focus-ring-color",
              },
              "&:hover, &:focus-visible": {
                borderColor: "#646cff",
              },
              "@media (prefers-color-scheme: light)": {
                backgroundColor: "#f9f9f9",
              },
            }}
          >
            Clear
          </Button>
        </div>
      ))}
    </div>
  );
}
