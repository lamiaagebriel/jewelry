import { FC } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/ui/table"

type SummaryDataTableProps = {
  summaries: { label: React.ReactNode; value: React.ReactNode }[]
  children?: React.ReactNode
}
const SummaryDataTable: FC<SummaryDataTableProps> = ({
  children,
  summaries,
}) => {
  return (
    <>
      <Table>
        <TableBody>
          {summaries.map((summary, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{summary.label}</TableCell>
              <TableCell className="text-right">{summary.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {children}
    </>
  )
}
export default SummaryDataTable
