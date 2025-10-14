import { Checkbox } from "@/components/ui/scadcnUi/checkbox";

type Props = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export default function CheckBox({ label, checked, onChange }: Props) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <span className="text-sm">{label}</span>
      <Checkbox checked={checked} onCheckedChange={onChange} />
    </label>
  );
}
