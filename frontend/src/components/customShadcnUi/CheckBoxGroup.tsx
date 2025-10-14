import CheckBox from "./CheckBox";

type Props = {
  options: string[];
  selected: Set<string>;
  onChange: (next: Set<string>) => void;
};

export default function CheckBoxGroup({ options, selected, onChange }: Props) {
  const toggle = (value: string) => {
    const next = new Set(selected);
    next.has(value) ? next.delete(value) : next.add(value);
    onChange(next);
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <CheckBox
          key={opt}
          label={opt}
          checked={selected.has(opt)}
          onChange={() => toggle(opt)}
        />
      ))}
    </div>
  );
}
