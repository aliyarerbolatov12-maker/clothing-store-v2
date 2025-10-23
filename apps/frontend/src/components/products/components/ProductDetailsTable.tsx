import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/scadcnUi/table";

interface ProductDetailsTableProps {
  details: {
    label: string;
    value: string;
  }[];
}

export default function ProductDetailsTable({
  details,
}: ProductDetailsTableProps) {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3 font-bold">Property</TableHead>
          <TableHead className="font-bold">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {details.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.label}</TableCell>
            <TableCell>{item.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
